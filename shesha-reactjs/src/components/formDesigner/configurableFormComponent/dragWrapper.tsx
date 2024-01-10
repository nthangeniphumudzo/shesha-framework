import React, { FC, MutableRefObject, PropsWithChildren, useEffect, useState } from 'react';
import { useForm } from '@/providers/form';
import { useMetadata } from '@/providers';
import { Button } from 'antd';
import { useFormDesigner } from '@/providers/formDesigner';
import { useDataContext } from '@/providers/dataContextProvider';
import { DeleteFilled } from '@ant-design/icons';
import classNames from 'classnames';

interface IDragWrapperProps {
  componentId: string;
  componentRef: MutableRefObject<any>;
  readOnly?: boolean;
}

export const DragWrapper: FC<PropsWithChildren<IDragWrapperProps>> = ({
  readOnly,
  componentId,
  componentRef,
  children,
}) => {
  const { getComponentModel } = useForm();
  const { selectedComponentId, setSelectedComponent, isDebug, deleteComponent } = useFormDesigner();

  const [selected, setSelected] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const metadata = useMetadata(false);
  const dataContext = useDataContext(false);

  const componentModel = getComponentModel(componentId);

  // used to update metadata, context and componentRef after adding component to form
  useEffect(() => {
    if (selectedComponentId === componentId && !selected) {
      setSelectedComponent(componentId, metadata?.id, dataContext, componentRef);
    }
  }, [selected]);

  const onClick = (e) => {
    e.stopPropagation();
    setSelectedComponent(
      selectedComponentId === componentId ? null : componentId,
      metadata?.id,
      dataContext,
      componentRef
    );
    setSelected(true);
  };

  const onMouseOver = (e) => {
    e.stopPropagation();
    setIsOpen(true);
  };

  const onMouseOut = (e) => {
    e.stopPropagation();
    setIsOpen(false);
  };
  const onDeleteClick = () => {
    deleteComponent({ componentId: componentModel.id });
  };

  const selectedComponent = selectedComponentId === componentId;

  return (
    <div
      className={classNames('sha-component-drag-handle', {
        activated: isOpen && selected,
      })}
      onClick={onClick}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      {!readOnly && selectedComponent && (
        <div className="sha-component-controls">
          <Button icon={<DeleteFilled color="red" />} onClick={onDeleteClick} size="small" danger />
        </div>
      )}
      {!readOnly && isOpen && (
        <div className="sha-component-tool_tip">
          {isDebug && (
            <div>
              <strong>Id:</strong> {componentId}
            </div>
          )}
          <div>
            <span>
              {componentModel.type}: {componentModel.propertyName}
            </span>
          </div>
        </div>
      )}

      {children}
    </div>
  );
};

export default DragWrapper;
