import ComponentsContainer from '@/components/formDesigner/containers/componentsContainer';
import { CollapsiblePanel } from '@/components/panel';
import { migrateCustomFunctions, migratePropertyName } from '@/designer-components/_common-migrations/migrateSettings';
import { migrateVisibility } from '@/designer-components/_common-migrations/migrateVisibility';
import { IToolboxComponent } from '@/interfaces';
import { useFormData, useGlobalState } from '@/providers';
import { useForm } from '@/providers/form';
import { FormMarkup } from '@/providers/form/models';
import { evaluateString, getLayoutStyle, pickStyleFromModel, validateConfigurableComponentSettings } from '@/providers/form/utils';
import { GroupOutlined } from '@ant-design/icons';
import { ExpandIconPosition } from 'antd/lib/collapse/Collapse';
import { nanoid } from '@/utils/uuid';
import React, { useEffect } from 'react';
import { ICollapsiblePanelComponentProps, ICollapsiblePanelComponentPropsV0 } from './interfaces';
import settingsFormJson from './settingsForm.json';
import { ColumnsSettingsForm } from './collapsibleSettings';
import { executeFunction } from '@/utils';
import ParentProvider from '@/providers/parentProvider/index';
import { migrateFormApi } from '../_common-migrations/migrateFormApi1';
import { removeComponents } from '../_common-migrations/removeComponents';
import { IColumnsComponentProps } from '../columns/interfaces';
import { Col, Row } from 'antd';
import { toSizeCssProp } from '@/utils/form';
import { useFormDesignerActions, useFormDesignerState } from '@/providers/formDesigner';

const settingsForm = settingsFormJson as FormMarkup;

const CollapsiblePanelComponent: IToolboxComponent<ICollapsiblePanelComponentProps> = {
  type: 'collapsiblePanel',
  isInput: false,
  name: 'Panel',
  icon: <GroupOutlined />,
  Factory: ({ model }) => {
    const { formMode } = useForm();
    const { data } = useFormData();
    const [added, setAdded] = React.useState(false);
    const { addComponent } = useFormDesignerActions()
    const { formFlatMarkup } = useFormDesignerState();
    const { globalState } = useGlobalState();
    const {
      label,
      expandIconPosition,
      collapsedByDefault,
      collapsible,
      ghost,
      bodyColor,
      headerColor,
      isSimpleDesign,
      hideCollapseContent,
      hideWhenEmpty,
      customHeader = false,
      columns,
      gutterX,
      gutterY
    } = model;


    useEffect(() => {
      const isCollapsiblePanel = model?.type === 'collapsiblePanel'
        && model['columns']
        && !formFlatMarkup?.allComponents[model?.columns[0]?.components[0]?.id];
      if (isCollapsiblePanel) {
        addComponent({
          ...model?.columns[0],
          componentType: model?.columns[0].components[0].type,
          containerId: model?.columns[0].id
        })
      }
    }, [])



    if (model.hidden) return null;

    const styling = JSON.parse(model.stylingBox || '{}');

    const headerHeight = toSizeCssProp(model.headerHeight)

    const evaluatedLabel = typeof label === 'string' ? evaluateString(label, data) : label;


    const getPanelStyle = {
      backgroundColor: headerColor,
      ...pickStyleFromModel(styling),
      ...(executeFunction(model?.style, { data, globalState }) || {}),
    };


    const extra =
      columns?.length > 0 || formMode === 'designer' ? (
        <Row gutter={[gutterX, gutterY]} style={getLayoutStyle(model, { data, globalState })}>
          {columns &&
            columns.map((col, index) => {
              if (index == 0 && !customHeader) {
                col.components[0].content = evaluatedLabel;
                if (col.components.length && formFlatMarkup?.allComponents[col.components[0].id] == undefined && !added) {
                  setAdded(true);
                  // addComponent({
                  //   ...col.components[0],
                  //   componentType: col?.components[0].type,
                  //   containerId: col.id
                  // })
                }
              }
              // if (index == 1 && model?.header?.components.length > 0) {
              //   const modHeaders = model?.header?.components.map(col => ({ ...col, parentId: col?.id }));
              //   col.components = modHeaders;
              // }
              return (
                <Col
                  key={index}
                  md={col.flex}
                  offset={col.offset}
                  pull={col.pull}
                  push={col.push}
                  className="sha-designer-column"
                >
                  <ComponentsContainer
                    containerId={col.id}

                    dynamicComponents={(model?.isDynamic || (!customHeader)) ? col?.components : []}
                  />
                </Col>
              )
            }
            )}
        </Row>
      ) : null;

    const header = <div style={{
      position: 'relative',
    }}>
      {extra}
    </div>


    console.log("components :::::", formFlatMarkup);

    return (
      <ParentProvider model={model}>
        <CollapsiblePanel
          header={header}
          expandIconPosition={expandIconPosition !== 'hide' ? (expandIconPosition as ExpandIconPosition) : 'start'}
          collapsedByDefault={collapsedByDefault}
          extra={<></>}
          collapsible={collapsible === 'header' ? 'header' : 'icon'}
          showArrow={collapsible !== 'disabled' && expandIconPosition !== 'hide'}
          ghost={ghost}
          style={getPanelStyle}
          className={model.className}
          bodyColor={bodyColor}
          readonly={formMode !== 'designer'}
          isSimpleDesign={isSimpleDesign}
          hideCollapseContent={hideCollapseContent}
          hideWhenEmpty={hideWhenEmpty}
          headerHeight={headerHeight}

        >
          <ComponentsContainer
            containerId={model.content.id}
            dynamicComponents={model?.isDynamic ? model?.content.components : []}
          />
        </CollapsiblePanel>
      </ParentProvider>
    );
  },
  initModel: (model) => {
    const tabsModel: IColumnsComponentProps = {
      ...model,
      propertyName: 'custom Name',
      columns: [
        {
          id: nanoid(), flex: 12, offset: 0, push: 0, pull: 0, components: []
        },
        { id: nanoid(), flex: 12, offset: 0, push: 0, pull: 0, components: [] },
      ],
      gutterX: 12,
      gutterY: 12,
      stylingBox: "{\"marginBottom\":\"5\"}"
    };

    return ({
      ...model,
      ...tabsModel,
      stylingBox: "{\"marginBottom\":\"5\"}"
    })
  },
  settingsFormFactory: (props) => {
    return <ColumnsSettingsForm {...props} />;
  },
  validateSettings: (model) => validateConfigurableComponentSettings(settingsForm, model),
  migrator: (m) =>
    m
      .add<ICollapsiblePanelComponentPropsV0>(0, (prev) => {
        return {
          ...prev,
          expandIconPosition: 'right',
        };
      })
      .add<ICollapsiblePanelComponentProps>(1, (prev, context) => {
        const header = { id: nanoid(), components: [] };
        const content = { id: nanoid(), components: [] };

        delete context.flatStructure.componentRelations[context.componentId];
        context.flatStructure.componentRelations[content.id] = [];
        content.components =
          prev.components?.map((x) => {
            context.flatStructure.allComponents[x.id].parentId = content.id;
            context.flatStructure.componentRelations[content.id].push(x.id);
            return { ...x, parentId: content.id };
          }) ?? [];

        return {
          ...prev,
          components: undefined,
          header,
          content,
          collapsible: 'icon',
        };
      })
      .add<ICollapsiblePanelComponentProps>(2, (prev) => migratePropertyName(migrateCustomFunctions(prev)))
      .add<ICollapsiblePanelComponentProps>(3, (prev) => ({
        ...prev,
        expandIconPosition:
          prev.expandIconPosition === 'left'
            ? 'start'
            : prev.expandIconPosition === 'right'
              ? 'end'
              : prev.expandIconPosition,
      }))
      .add<ICollapsiblePanelComponentProps>(4, (prev) => migrateVisibility(prev))
      .add<ICollapsiblePanelComponentProps>(5, (prev) => ({ ...migrateFormApi.properties(prev) }))
      .add<ICollapsiblePanelComponentProps>(6, (prev) => removeComponents(prev))
      .add<ICollapsiblePanelComponentProps>(7, (prev) => {
        const evaluatedLabel = typeof prev?.label === 'string' ? evaluateString(prev?.label, {}) : prev?.label;
        if (!prev?.customHeader) {
          const defaultColumnId = prev?.columns[0].id;


          return {
            ...prev,
            columns: [
              {
                id: defaultColumnId, flex: 12, offset: 0, push: 0, pull: 0, components: [
                  {
                    "code": false,
                    "copyable": false,
                    "delete": false,
                    "ellipsis": false,
                    "mark": false,
                    "italic": false,
                    "underline": false,
                    "level": 1,
                    "textType": "span",
                    "id": "703zTXPXkSn6CY1Ou5V1_QaAm5tfDL",
                    "type": "text",
                    "propertyName": "text1",
                    "componentName": "text1",
                    "label": "Text1",
                    "labelAlign": "right",
                    "parentId": `${defaultColumnId}`,
                    "hidden": false,
                    "isDynamic": false,
                    "version": 2,
                    "contentDisplay": "content",
                    "textAlign": "start",
                    "content": `${evaluatedLabel}`,
                    "dataType": "string",
                    "padding": "none"

                  }
                ]
              },
              { id: prev?.columns[1].id, flex: 12, offset: 0, push: 0, pull: 0, components: [] },
            ],
            gutterX: 12,
            gutterY: 12,
          }

        }



      })
  ,
  customContainerNames: ['header', 'content', 'columns'],
};

export default CollapsiblePanelComponent;
