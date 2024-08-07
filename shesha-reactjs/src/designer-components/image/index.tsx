import { IFormItem, IToolboxComponent } from '@/interfaces';
import { FormMarkup, IConfigurableFormComponent } from '@/providers/form/models';
import { FileImageOutlined } from '@ant-design/icons';
import ConfigurableFormItem from '@/components/formDesigner/components/formItem';
import settingsFormJson from './settingsForm.json';
import { evaluateValue, getStyle, pickStyleFromModel, validateConfigurableComponentSettings } from '@/providers/form/utils';
import React, { CSSProperties } from 'react';
import {
  migrateCustomFunctions,
  migratePropertyName,
} from '@/designer-components/_common-migrations/migrateSettings';
import { migrateVisibility } from '@/designer-components/_common-migrations/migrateVisibility';
import { StoredFileProvider, useForm, useFormData, useGlobalState, useSheshaApplication } from '@/providers';
import { isValidGuid } from '@/components/formDesigner/components/utils';
import { ValidationErrors } from '@/components';
import { ImageField, ImageSourceType } from './image';
import ConditionalWrap from '@/components/conditionalWrapper';
import { migrateFormApi } from '../_common-migrations/migrateFormApi1';
import { removeUndefinedProps } from '@/utils/object';

export interface IImageProps extends IConfigurableFormComponent, IFormItem {
  height?: number | string;
  width?: number | string;
  url?: string;
  storedFileId?: string;
  base64?: string;
  dataSource?: ImageSourceType;
  ownerType?: string;
  ownerId?: string;
  fileCategory?: string;
  allowPreview?: boolean;
  allowedFileTypes?: string[];
  alt?: string;
  objectFit?: 'fill' | 'contain' | 'cover' | 'scale-down' | 'none';
  objectPosition?: string;
  filter?: string;
  borderSize?: number;
  borderRadius?: number;
  borderType?: string;
  borderColor?: string;
  stylingBox?: string;
  opacity?: number;
}

const settingsForm = settingsFormJson as FormMarkup;

const ImageComponent: IToolboxComponent<IImageProps> = {
  type: 'image',
  name: 'Image',
  icon: <FileImageOutlined />,
  isInput: true,

  Factory: ({ model }) => {
    const { data } = useFormData();
    const { formSettings } = useForm();
    const { globalState } = useGlobalState();
    const { backendUrl } = useSheshaApplication();
    const ownerId = evaluateValue(model.ownerId, { data, globalState });


    if (model.dataSource === 'storedFileId' && model.storedFileId && !isValidGuid(model.storedFileId)) {
      return <ValidationErrors error="The provided StoredFileId is inValid" />;
    }


    const styling = JSON.parse(model.stylingBox || '{}');
    const stylingBoxAsCSS = pickStyleFromModel(styling);

    const additionalStyles: CSSProperties = removeUndefinedProps({
      objectFit: model.objectFit,
      objectPosition: model.objectPosition,
      filter: model.filter,
      borderWidth: model.borderSize,
      borderRadius: model.borderRadius,
      borderStyle: model.borderType,
      borderColor: model.borderColor,
      opacity: model.opacity,
      ...stylingBoxAsCSS
    });
    const jsStyle = getStyle(model.style, data);
    const finalStyle = removeUndefinedProps({...jsStyle, ...additionalStyles});
  
    return (
      <ConfigurableFormItem model={model}>
        {(value, onChange) => {
          const val = model.dataSource === 'storedFileId' 
            ? model.storedFileId || value?.id || value 
            : model.dataSource === 'base64'
              ? model.base64 || value
              : model.url || value;

          const fileProvider = child => {
            return (
              <StoredFileProvider 
                value={val}
                onChange={onChange}
                fileId={val}
                baseUrl={backendUrl}
                ownerId={Boolean(ownerId) ? ownerId : Boolean(data?.id) ? data?.id : ''}
                ownerType={
                  Boolean(model.ownerType) ? model.ownerType : Boolean(formSettings?.modelType) ? formSettings?.modelType : ''
                }
                fileCategory={model.fileCategory}
                propertyName={!model.context ? model.propertyName : null}
                //uploadMode={model.useSync ? 'sync' : 'async'}
              >
                {child}
              </StoredFileProvider>
            );
          };

          return (
            <ConditionalWrap
              condition={model.dataSource === 'storedFileId'}
              wrap={fileProvider}
            >
            <ImageField
              allowedFileTypes={model?.allowedFileTypes}
              height={model.height}
              width={model.width}
              imageSource={model.dataSource}
              styles={finalStyle}
              value={val}
              readOnly={model?.readOnly}
              onChange={onChange}
              allowPreview={model?.allowPreview}
              alt={model?.alt}
            />
            </ConditionalWrap>
          );
        }}
      </ConfigurableFormItem>
    );
  },
  initModel: (model) => {
    const customModel: IImageProps = {
      ...model,
    };
    return customModel;
  },
  migrator: (m) => m
    .add<IImageProps>(0, (prev) => migratePropertyName(migrateCustomFunctions(prev) as IImageProps))
    .add<IImageProps>(1, (prev) => migrateVisibility(prev))
    .add<IImageProps>(2, (prev) => {
      return {
        ...prev,
        url: Boolean(prev.url) ? {_mode: 'code', _code: prev.url} : null,
        storedFileId: Boolean(prev.storedFileId) ? {_mode: 'code', _code: prev.storedFileId} : null,
      } as any;
    })
    .add<IImageProps>(3, (prev) => ({...migrateFormApi.properties(prev)}))
  ,
  settingsFormMarkup: settingsForm,
  validateSettings: (model) => validateConfigurableComponentSettings(settingsForm, model),
  
};

export default ImageComponent;


