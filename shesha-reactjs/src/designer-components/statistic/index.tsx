import { ValidationErrors } from '@/components';
import { getEventHandlers, isValidGuid } from '@/components/formDesigner/components/utils';
import ShaIcon, { IconType } from '@/components/shaIcon';
import ShaStatistic from '@/components/statistic';
import { IToolboxComponent } from '@/interfaces';
import { IInputStyles, useForm, useFormData, useSheshaApplication } from '@/providers';
import { IConfigurableFormComponent } from '@/providers/form/models';
import { getStyle, pickStyleFromModel, useAvailableConstantsData, validateConfigurableComponentSettings } from '@/providers/form/utils';
import { toSizeCssProp } from '@/utils/form';
import { removeUndefinedProps } from '@/utils/object';
import { BarChartOutlined } from '@ant-design/icons';
import React, { useEffect, useMemo, useState } from 'react';
import { CSSProperties } from 'styled-components';
import { migrateFormApi } from '../_common-migrations/migrateFormApi1';
import { migratePrevStyles } from '../_common-migrations/migrateStyles';
import { getBackgroundStyle } from '../_settings/utils/background/utils';
import { getBorderStyle } from '../_settings/utils/border/utils';
import { getSizeStyle } from '../_settings/utils/dimensions/utils';
import { IFontValue } from '../_settings/utils/font/interfaces';
import { getFontStyle } from '../_settings/utils/font/utils';
import { getShadowStyle } from '../_settings/utils/shadow/utils';
import { getSettings } from './settingsForm';
import { defaultStyles, getDesignerDefaultContent } from './utils';

interface IStatisticComponentProps extends Omit<IInputStyles, 'font'>, IConfigurableFormComponent {
  value?: number | string;
  precision?: number;
  title?: string | number;
  valueStyle?: string;
  titleStyle?: string;
  prefix?: string;
  suffix?: string;
  prefixIcon?: string;
  suffixIcon?: string;
  titleFont?: IFontValue;
  valueFont?: IFontValue;
  onClick?: () => void;
  onDoubleClick?: () => void;
}

const StatisticComponent: IToolboxComponent<IStatisticComponentProps> = {
  type: 'statistic',
  name: 'Statistic',
  icon: <BarChartOutlined />,
  isInput: true,
  isOutput: true,
  Factory: ({ model: passedModel }) => {
    const { data: formData } = useFormData();
    const { style, valueStyle, titleStyle, prefix, suffix, prefixIcon, suffixIcon, ...model } = passedModel;
    const { backendUrl, httpHeaders } = useSheshaApplication();
    const allData = useAvailableConstantsData();
    const { formMode } = useForm();

    const value = useMemo(() => {
      return model.value;
    }, [model]);

    const dimensions = model?.dimensions;
    const border = model?.border;
    const valueFont = model?.valueFont;
    const titleFont = model?.titleFont;
    const shadow = model?.shadow;
    const background = model?.background;
    const jsStyle = getStyle(passedModel?.style, passedModel);
    const valueStyles = getStyle(valueStyle);
    const titleStyles = getStyle(titleStyle);

    const dimensionsStyles = useMemo(() => getSizeStyle(dimensions), [dimensions]);
    const borderStyles = useMemo(() => getBorderStyle(border, jsStyle), [border]);
    const valueFontStyles = useMemo(() => getFontStyle(valueFont), [valueFont]);
    const titleFontStyles = useMemo(() => getFontStyle(titleFont), [titleFont]);
    const [backgroundStyles, setBackgroundStyles] = useState({});
    const shadowStyles = useMemo(() => getShadowStyle(shadow), [shadow]);

    useEffect(() => {
      const fetchStyles = async () => {
        const storedImageUrl = background?.storedFile?.id && background?.type === 'storedFile'
          ? await fetch(`${backendUrl}/api/StoredFile/Download?id=${background?.storedFile?.id}`,
            { headers: { ...httpHeaders, "Content-Type": "application/octet-stream" } })
            .then((response) => {
              return response.blob();
            })
            .then((blob) => {
              return URL.createObjectURL(blob);
            }) : '';

        const style = await getBackgroundStyle(background, jsStyle, storedImageUrl);
        setBackgroundStyles(style);
      };

      fetchStyles();
    }, [background, background?.gradient?.colors, backendUrl, httpHeaders]);

    if (model?.background?.type === 'storedFile' && model?.background.storedFile?.id && !isValidGuid(model?.background.storedFile.id)) {
      return <ValidationErrors error="The provided StoredFileId is invalid" />;
    }

    const styling = JSON.parse(model?.stylingBox || '{}');
    const stylingBoxAsCSS = pickStyleFromModel(styling);

    const additionalStyles: CSSProperties = removeUndefinedProps({
      height: toSizeCssProp(model?.height),
      width: toSizeCssProp(model?.width),
      borderWidth: model?.hideBorder ? 0 : model?.borderSize,
      borderRadius: model?.borderRadius,
      borderStyle: model?.borderType,
      borderColor: model?.borderColor,
      backgroundColor: model?.backgroundColor,
      ...stylingBoxAsCSS,
      ...dimensionsStyles,
      ...borderStyles,
      ...backgroundStyles,
      ...shadowStyles
    });

    const customEvents = getEventHandlers(model, allData);

    if (formMode === 'designer') {
      return (
        <ShaStatistic
          value={value}
          precision={passedModel?.precision}
          title={<div style={removeUndefinedProps({ ...titleFontStyles, ...titleStyles })}>{passedModel.title}</div>}
          prefix={<div style={removeUndefinedProps({ ...valueFontStyles, ...valueStyles })}>{passedModel.prefixIcon ? <ShaIcon iconName={passedModel.prefixIcon as IconType} /> : null}<span style={{ marginRight: 5 }}>{passedModel.prefix ? passedModel.prefix : null}</span></div>}
          suffix={<div style={removeUndefinedProps({ ...valueFontStyles, ...valueStyles })}>{passedModel.suffixIcon ? <ShaIcon iconName={passedModel.suffixIcon as IconType} /> : null}<span style={{ marginLeft: 5 }}>{passedModel.suffix ? passedModel.suffix : null}</span></div>}
          style={removeUndefinedProps({ ...getStyle(style, formData), ...additionalStyles })}
          valueStyle={removeUndefinedProps({ ...valueFontStyles, ...valueStyles })}
          onClick={customEvents?.onClick}
        />
      );
    }

    return (
      <ShaStatistic
        value={passedModel?.value}
        precision={passedModel?.precision}
        title={<div style={removeUndefinedProps({ ...titleFontStyles, ...titleStyles })}>{passedModel?.title}</div>}
        prefix={<div style={removeUndefinedProps({ ...valueFontStyles, ...valueStyles })}>{prefixIcon ? <ShaIcon iconName={prefixIcon as IconType} /> : null}<span style={{ marginRight: 5 }}>{prefix ? prefix : null}</span></div>}
        suffix={<div style={removeUndefinedProps({ ...valueFontStyles, ...valueStyles })}>{suffixIcon ? <ShaIcon iconName={suffixIcon as IconType} /> : null}<span style={{ marginLeft: 5 }}>{suffix ? suffix : null}</span></div>}
        style={removeUndefinedProps({ ...getStyle(style, formData), ...additionalStyles })}
        valueStyle={removeUndefinedProps({ ...valueFontStyles, ...valueStyles })}
        onClick={customEvents?.onClick}
      />
    );
  },
  settingsFormMarkup: (data) => getSettings(data),
  validateSettings: (model) => validateConfigurableComponentSettings(getSettings(model), model),
  migrator: (m) => m
    .add<IStatisticComponentProps>(1, (prev) => ({ ...migrateFormApi.properties(prev) }))
    .add<IStatisticComponentProps>(2, (prev) => {
      const styles = {
        style: prev?.style,
        valueFont: prev?.valueFont,
        valueStyle: prev?.valueStyle,
        titleFont: prev?.titleFont,
        titleStyle: prev?.titleStyle,
        hideBorder: prev?.hideBorder,
      };

      return { ...prev, desktop: { ...styles }, tablet: { ...styles }, mobile: { ...styles } };
    })
    .add<IStatisticComponentProps>(3, (prev) => ({ ...migratePrevStyles(prev, defaultStyles()) }))
    .add<IStatisticComponentProps>(4, (prev) => ({ ...getDesignerDefaultContent(prev) }))
    .add<IStatisticComponentProps>(5, (prev) => {
      const styles = {
        ...prev,
        valueFont: defaultStyles().valueFont,
        titleFont: defaultStyles().titleFont,
      };

      return { ...prev, desktop: { ...prev.desktop, ...styles }, tablet: { ...prev.tablet, ...styles }, mobile: { ...prev.mobile,  ...styles } };
    })
};

export default StatisticComponent;