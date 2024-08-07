import { GroupOutlined } from '@ant-design/icons';
import React from 'react';
import { ICommonContainerProps, IContainerComponentProps, IToolboxComponent } from '@/interfaces';
import { getStyle, getLayoutStyle, validateConfigurableComponentSettings, evaluateValue } from '@/providers/form/utils';
import { getSettings } from './settingsForm';
import { migrateCustomFunctions, migratePropertyName } from '@/designer-components/_common-migrations/migrateSettings';
import { StoredFileProvider, useForm, useFormData, useGlobalState, useSheshaApplication } from '@/providers';
import { ComponentsContainer, ValidationErrors } from '@/components';
import { migrateVisibility } from '@/designer-components/_common-migrations/migrateVisibility';
import ParentProvider from '@/providers/parentProvider/index';
import { migrateFormApi } from '../_common-migrations/migrateFormApi1';
import ConditionalWrap from '@/components/conditionalWrapper';
import { isValidGuid } from '@/components/formDesigner/components/utils';
import { CSSProperties } from 'styled-components';
import { toSizeCssProp } from '@/utils/form';

const ContainerComponent: IToolboxComponent<IContainerComponentProps> = {
  type: 'container',
  name: 'Container',
  icon: <GroupOutlined />,
  Factory: ({ model }) => {
    const { data: formData, data } = useFormData();
    const { globalState } = useGlobalState();
    const { formSettings } = useForm();
    const { backendUrl } = useSheshaApplication();
    const ownerId = evaluateValue(model.ownerId, { data, globalState });

    if (model.dataSource === 'storedFileId' && model.storedFileId && !isValidGuid(model.storedFileId)) {
      return <ValidationErrors error="The provided StoredFileId is invalid" />;
    }

    if (model.hidden) return null;

    const flexAndGridStyles: ICommonContainerProps = {
      display: model?.display,
      flexDirection: model?.flexDirection,
      direction: model?.direction,
      justifyContent: model?.justifyContent,
      alignItems: model?.alignItems,
      alignSelf: model?.alignSelf,
      justifyItems: model?.justifyItems,
      textJustify: model?.textJustify,
      justifySelf: model?.justifySelf,
      noDefaultStyling: model?.noDefaultStyling,
      gridColumnsCount: model?.gridColumnsCount,
      flexWrap: model?.flexWrap,
      gap: model?.gap,
    };

    const widthStyles: CSSProperties = {
      width: toSizeCssProp(model.width),
      minWidth: toSizeCssProp(model.minWidth),
      maxWidth: toSizeCssProp(model.maxWidth),
      overflow: model?.overflow,
    };

    const heightStyles: CSSProperties = {
      height: toSizeCssProp(model.height),
      minHeight: toSizeCssProp(model.minHeight),
      maxHeight: toSizeCssProp(model.maxHeight),
    };


    const borderStyles: CSSProperties = {
      borderWidth: toSizeCssProp(model.borderWidth),
      borderColor: model.borderColor,
      borderStyle: model.borderStyle,
      borderRadius: toSizeCssProp(model.borderRadius),
    };

    let val;
    if (model.dataSource === "storedFileId") {
      val = model.storedFileId;
    } else if (model.dataSource === "base64") {
      val = model.base64;
    } else if (model.dataSource === "url") {
      val = model.backgroundUrl;
    }

    const fileProvider = (child) => {
      return (
        <StoredFileProvider
          value={val}
          fileId={val}
          baseUrl={backendUrl}
          ownerId={Boolean(ownerId) ? ownerId : Boolean(data?.id) ? data?.id : ''}
          ownerType={
            Boolean(model.ownerType) ? model.ownerType : Boolean(formSettings?.modelType) ? formSettings?.modelType : ''
          }
          fileCategory={model.fileCategory}
          propertyName={!model.context ? model.propertyName : null}
        >
          {child}
        </StoredFileProvider>
      );
    };

    const backgroundStyles = model?.backgroundType === 'image'
      ? { background: `url(${val})`, backgroundSize: model?.backgroundCover, backgroundRepeat: model?.backgroundRepeat }
      : model?.backgroundType === 'color'
        ? { background: model?.backgroundColor }
        : {};

    return (
      <ParentProvider model={model}>
        <ConditionalWrap
          condition={model.dataSource === 'storedFileId'}
          wrap={fileProvider}
        >
          <ComponentsContainer
            containerId={model.id}
            {...backgroundStyles}
            className={model.className}
            {...model}
            wrapperStyle={getLayoutStyle({ ...model, style: model?.wrapperStyle }, { data: formData, globalState })}
            style={{
              ...widthStyles,
              ...heightStyles,
              ...borderStyles,
              ...backgroundStyles,
              ...getStyle(model?.style, formData)
            }}
            dynamicComponents={model?.isDynamic ? model?.components : []}
            {...flexAndGridStyles}
          />
        </ConditionalWrap>
      </ParentProvider>
    );
  },
  settingsFormMarkup: (data) => getSettings(data),
  validateSettings: (model) => validateConfigurableComponentSettings(getSettings(model), model),
  migrator: (m) =>
    m
      .add<IContainerComponentProps>(0, (prev) => ({
        ...prev,
        direction: prev['direction'] ?? 'vertical',
        justifyContent: prev['justifyContent'] ?? 'left',
        display: prev['display'] /* ?? 'block'*/,
        flexWrap: prev['flexWrap'] ?? 'wrap',
        components: prev['components'] ?? [],
      }))
      .add<IContainerComponentProps>(1, (prev) => migratePropertyName(migrateCustomFunctions(prev)))
      .add<IContainerComponentProps>(2, (prev) => migrateVisibility(prev))
      .add<IContainerComponentProps>(3, (prev) => ({ ...migrateFormApi.properties(prev) }))
  ,
};

export default ContainerComponent;
