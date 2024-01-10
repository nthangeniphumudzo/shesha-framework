import React, { FC, MutableRefObject, useEffect, useRef } from 'react';
import { Tooltip } from 'antd';
import { StopOutlined, EyeInvisibleOutlined, EditOutlined, FunctionOutlined } from '@ant-design/icons';
import FormComponent from '../formComponent';
import { useComponentModel, useForm } from '@/providers/form';
import DragWrapper from './dragWrapper';
import ValidationIcon from './validationIcon';
import { Show } from '@/components/show';
import classNames from 'classnames';
import CustomErrorBoundary from '@/components/customErrorBoundary';
import { useFormDesigner } from '@/providers/formDesigner';
import { IConfigurableFormComponent } from '@/interfaces';
import { EditMode, useMetadata } from '@/providers';
import { getActualPropertyValue, useApplicationContext } from '@/index';
import { isPropertySettings } from '@/designer-components/_settings/utils';

export interface IConfigurableFormComponentProps {
  id: string;
  index: number;
}

const ConfigurableFormComponent: FC<IConfigurableFormComponentProps> = ({ id }) => {
  const { formMode } = useForm();
  const designer = useFormDesigner(false);
  const componentRef = useRef(null);

  const componentModel = useComponentModel(id);
  
  const isDesignMode = formMode === 'designer';

  if (!designer || !isDesignMode || componentModel?.isDynamic) return (
    <ComponentRenderer id={id} componentRef={componentRef} />
  );

  return (
    <ConfigurableFormComponentDesigner
      componentModel={componentModel}
      componentRef={componentRef}
    />
  );
};

interface IComponentRendererProps {
  id: string;
  componentRef: MutableRefObject<any>;
}
const ComponentRenderer: FC<IComponentRendererProps> = ({ id, componentRef }) => {
  return (
    <CustomErrorBoundary>
      <FormComponent id={id} componentRef={componentRef} />
    </CustomErrorBoundary>
  );
};

interface IConfigurableFormComponentDesignerProps {
  componentModel: IConfigurableFormComponent;
  componentRef: MutableRefObject<any>;
}
const ConfigurableFormComponentDesigner: FC<IConfigurableFormComponentDesignerProps> = ({ componentModel, componentRef }) => {
  const allData = useApplicationContext('all');
  const {
    selectedComponentId,
    readOnly,
    activeDataSourceId,
    setActiveDataSource,
  } = useFormDesigner();

  const metadata = useMetadata(false);
  useEffect(() => {
    if (componentModel.id && selectedComponentId === componentModel.id && metadata && metadata.id !== activeDataSourceId){
      // set active data source, 
      // this code is used to correct a current datasource after adding of a  new component to a form
      setActiveDataSource(metadata.id);
    }    
  }, []);
  


 const hiddenByCondition = allData?.form?.visibleComponentIds && !allData.form.visibleComponentIds.includes(componentModel.id);
  const disabledByCondition = allData?.form?.enabledComponentIds && !allData.form.enabledComponentIds.includes(componentModel.id);

  const invalidConfiguration =
    componentModel.settingsValidationErrors && componentModel.settingsValidationErrors.length > 0;

  const hiddenFx = isPropertySettings(componentModel.hidden);
  const hidden = getActualPropertyValue(componentModel, allData, 'hidden')?.hidden;
  const componentEditModeFx = isPropertySettings(componentModel.editMode);
  const componentEditMode = getActualPropertyValue(componentModel, allData, 'editMode')?.editMode as EditMode;

  const actionText1 = (hiddenFx ? 'hidden' : '') + (hiddenFx && componentEditModeFx ? ' and ' : '') + (componentEditModeFx ? 'disabled' : '');
  const actionText2 = (hiddenFx ? 'showing' : '') + (hiddenFx && componentEditModeFx ? '/' : '') + (componentEditModeFx ? 'enabled' : '');

  return (
    <div
      className={classNames('sha-component', {
        selected: selectedComponentId === componentModel.id,
        'has-config-errors': invalidConfiguration,
      })}
    >
      <span className="sha-component-indicator">
        <Show when={hiddenFx || componentEditModeFx}>
          <Tooltip title={`This component is ${actionText1} by condition. It's now ${actionText2} because we're in a designer mode`}>
            <FunctionOutlined />
          </Tooltip>
        </Show>

        <Show when={!hiddenFx && (hidden || hiddenByCondition)}>
          <Tooltip title="This component is hidden. It's now showing because we're in a designer mode">
            <EyeInvisibleOutlined />
          </Tooltip>
        </Show>

        <Show when={!componentEditModeFx && (componentEditMode === 'readOnly' || componentEditMode === false || disabledByCondition)}>
          <Tooltip title="This component is always in Read only mode. It's now enabled because we're in a designer mode">
            <StopOutlined />
          </Tooltip>
        </Show>
        <Show when={!componentEditModeFx && componentEditMode === 'editable' && !disabledByCondition}>
          <Tooltip title="This component is always in Edit/Action mode">
            <EditOutlined />
          </Tooltip>
        </Show>
      </span>

      {invalidConfiguration && <ValidationIcon validationErrors={componentModel.settingsValidationErrors} />}
      <div>
        <DragWrapper componentId={componentModel.id} componentRef={componentRef} readOnly={readOnly} >
        <div>
          <ComponentRenderer id={componentModel.id} componentRef={componentRef} />
        </div>
        </DragWrapper>
      </div>
    </div>
  );
};

export default ConfigurableFormComponent;
