import { DatePicker } from '@/components/antd';
import moment, { isMoment } from 'moment';
import React, { FC } from 'react';
import ReadOnlyDisplayFormItem from '@/components/readOnlyDisplayFormItem';
import { useForm, useGlobalState, useMetadata } from '@/providers';
import { getStyle } from '@/providers/form/utils';
import { getMoment } from '@/utils/date';
import { getDataProperty } from '@/utils/metadata';
import { IDateFieldProps, RangePickerChangeEvent, TimePickerChangeEvent } from './interfaces';
import {
    DATE_TIME_FORMATS,
    disabledDate,
    getDatePickerValue,
    getFormat,
    getRangePickerValues,
} from './utils';
import { asPropertiesArray } from '@/interfaces/metadata';

const MIDNIGHT_MOMENT = moment('00:00:00', 'HH:mm:ss');

const { RangePicker } = DatePicker;

export const DatePickerWrapper: FC<IDateFieldProps> = (props) => {
    const { properties: metaProperties } = useMetadata(false)?.metadata ?? {};
    const properties = asPropertiesArray(metaProperties, []);

    const { globalState } = useGlobalState();

    const {
        propertyName: name,
        hideBorder,
        range,
        value,
        showTime,
        showNow,
        showToday,
        onChange,
        picker = 'date',
        defaultValue,
        disabledDateMode,
        disabledDateTemplate,
        disabledDateFunc,
        readOnly,
        style,
        defaultToMidnight,
        resolveToUTC,
        ...rest
    } = props;

    const dateFormat = props?.dateFormat || getDataProperty(properties, name) || DATE_TIME_FORMATS.date;
    const timeFormat = props?.timeFormat || DATE_TIME_FORMATS.time;

    const { formData } = useForm();

    const pickerFormat = getFormat(props, properties);

    const convertValue = (localValue: any) => {
      const newValue = isMoment(localValue) ? localValue : getMoment(localValue, pickerFormat);
      const val = picker === 'week'
        ? newValue.startOf('week')
        : picker === 'month'
          ? newValue.startOf('month')
          : picker === 'quarter'
            ? newValue.startOf('quarter')
            : picker === 'year'
              ? newValue.startOf('year')
              : newValue;
      return !resolveToUTC ? val.utc(true) : val.local(true);
    };

    const handleDatePickerChange = (localValue: any | null, dateString: string) => {
        if (!dateString?.trim()) {
            (onChange as TimePickerChangeEvent)(null, '');
            return;
        }
        const newValue = convertValue(localValue);

        (onChange as TimePickerChangeEvent)(newValue, dateString);
    };

    const handleRangePicker = (values: any[], formatString: [string, string]) => {
        if (formatString?.includes('')) {
            (onChange as RangePickerChangeEvent)(null, null);
            return;
        }
        const dates = (values as []).map((val: any) => convertValue(val));

        (onChange as RangePickerChangeEvent)(dates, formatString);
    };

    const evaluatedStyle = { width: '100%', ...getStyle(style, formData, globalState) };

    if (range) {
        return (
            <RangePicker
                className="sha-range-picker"
                disabledDate={(e) => disabledDate(props, e, formData, globalState)}
                onChange={handleRangePicker}
                format={pickerFormat}
                value={getRangePickerValues(value, pickerFormat)}
                defaultValue={getRangePickerValues(defaultValue, pickerFormat)}
                {...rest}
                picker={picker}
                showTime={showTime ? (defaultToMidnight ? { defaultValue: [MIDNIGHT_MOMENT, MIDNIGHT_MOMENT] } : true) : false}
                showSecond
                disabled={readOnly}
                style={evaluatedStyle}
                allowClear
                variant={hideBorder ? 'borderless' : undefined}
            />
        );
    }

    const momentValue = getMoment(value, pickerFormat);

    if (readOnly) {
      const format = showTime
        ? `${dateFormat} ${timeFormat}`
        : dateFormat;

      return (
        <ReadOnlyDisplayFormItem
          value={momentValue?.toISOString()}
          type="datetime"
          dateFormat={format}
          timeFormat={timeFormat}
        />
      );
    }

    return (
        <DatePicker
            className="sha-date-picker"
            disabledDate={(e) => disabledDate(props, e, formData, globalState)}
            //disabled={disabled}
            onChange={handleDatePickerChange}
            variant={hideBorder ? 'borderless' : undefined}
            showTime={showTime ? (defaultToMidnight ? { defaultValue: MIDNIGHT_MOMENT } : true) : false}
            showNow={showNow}
            showToday={showToday}
            showSecond={true}
            picker={picker}
            format={pickerFormat}
            style={evaluatedStyle}
            {...rest}
            value={momentValue}
            {...getDatePickerValue(props, pickerFormat)}
            allowClear
        />
    );
};
