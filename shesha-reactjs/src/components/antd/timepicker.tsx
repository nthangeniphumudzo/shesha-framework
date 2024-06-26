import * as React from 'react';
import type { PickerProps, RangePickerProps } from 'antd/es/date-picker/generatePicker/interface';
import type { Moment } from 'moment';
import { DatePicker } from './datepicker';

export interface TimePickerProps extends Omit<PickerProps<Moment>, 'picker'> { }

const TimePicker = React.forwardRef<any, TimePickerProps>((props, ref) => (
    <DatePicker {...props} picker="time" mode={undefined} ref={ref} />
));

TimePicker.displayName = 'TimePicker';

export interface TimePickerRangeProps extends Omit<RangePickerProps<Moment>, 'picker'> { }
const TimeRangePicker = React.forwardRef<any, TimePickerRangeProps>((props, ref) => (
    <DatePicker.RangePicker {...props} picker="time" mode={undefined} ref={ref} />
));

type TimeSteps = Pick<RangePickerProps<Moment>, 'hourStep' | 'minuteStep' | 'secondStep'>;

export { TimePicker, TimeRangePicker, type TimeSteps };