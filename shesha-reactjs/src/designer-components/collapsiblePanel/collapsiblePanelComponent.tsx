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
import { Col, Row } from 'antd';
import { toSizeCssProp } from '@/utils/form';
import { useFormDesignerState } from '@/providers/formDesigner';

const settingsForm = settingsFormJson as FormMarkup;

const CollapsiblePanelComponent: IToolboxComponent<ICollapsiblePanelComponentProps> = {
  type: 'collapsiblePanel',
  isInput: false,
  name: 'Panel',
  icon: <GroupOutlined />,
  Factory: ({ model }) => {
    const { formMode } = useForm();
    const { data } = useFormData();
    // const { addComponent, updateComponent } = useFormDesignerActions()
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
      columns,
      gutterX,
      gutterY
    } = model;

    const evaluatedLabel = typeof label === 'string' ? evaluateString(label, data) : label;


    useEffect(() => {
      if (!model?.columns?.length) return;

      const firstColumn = model.columns[0];
      const hasComponents = firstColumn?.components?.length > 0;

      let hasHeader = false;

      if (hasComponents) {
        for (const key in formFlatMarkup?.allComponents) {
          if (formFlatMarkup?.allComponents[key]?.parentId === model?.columns[0]?.id
          ) {
            hasHeader = true;
            break;
          }
        };
      } else {
        hasHeader = true;
      }
      if (!hasHeader) {
        // addComponent({
        //   componentType: 'text',
        //   containerId: model?.columns[0].id,
        //   index: 0,
        // });
      };
    }, []);

    useEffect(() => {
      if (!model?.columns?.length) return;

      const firstColumn = model.columns[0];
      const firstComponent = firstColumn.components?.[0];

      if (firstComponent?.type !== 'text') return;

      for (const key in formFlatMarkup?.allComponents) {

        const component = formFlatMarkup.allComponents[key];
        const parentComponent = formFlatMarkup.allComponents[component?.parentId];


        if (
          component?.parentId &&
          component?.id &&
          !component?.content
          && (component?.parentId !== firstColumn.id || parentComponent)
        ) {

          // updateComponent({
          //   ...component,
          //   componentId: component.id,
          //   settings: {
          //     ...component,
          //     content: parentComponent?.components?.[0]?.settings?.content || firstComponent?.settings?.content,
          //   },
          // });
          break;
        }
      }
    }, [Object.keys(formFlatMarkup?.allComponents).length]);



    if (model.hidden) return null;

    const styling = JSON.parse(model.stylingBox || '{}');

    const headerHeight = toSizeCssProp(model.headerHeight)

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

                    dynamicComponents={(model?.isDynamic) ? col?.components : []}
                  />
                </Col>
              )
            }
            )}
        </Row>
      ) : evaluatedLabel;

    const header = <div style={{
      position: 'relative',
    }}>
      {extra}
    </div>


    console.log("Header ::", model?.header)

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
          dynamicBorderRadius={model?.borderRadius}
          style={{ ...getPanelStyle }}
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

    return ({
      ...model,
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
        const header = {
          id: nanoid(), components: [
            prev.columns.map((col, index) => {
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

                    dynamicComponents={(prev?.isDynamic) ? col?.components : []}
                  />
                </Col>
              )
            }
            )
          ]
        };
        const content = { id: nanoid(), components: [] };

        delete context.flatStructure.componentRelations[context.componentId];
        context.flatStructure.componentRelations[content.id] = [];
        content.components =
          prev.components?.map((x) => {
            context.flatStructure.allComponents[x.id].parentId = content.id;
            context.flatStructure.componentRelations[content.id].push(x.id);
            return { ...x, parentId: content.id };
          }) ?? [];

        console.log("header column ::", header)

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
        const defaultColumnId = nanoid();

        return {
          ...prev,
          propertyName: 'custom Name',
          columns: [
            {
              id: defaultColumnId, flex: 12, offset: 0, push: 0, pull: 0, components: [
                {
                  type: 'text',
                  id: nanoid(),
                  parentId: defaultColumnId,
                  settings: {
                    content: evaluatedLabel,
                  },
                }
              ]
            },
            { id: nanoid(), flex: 12, offset: 0, push: 0, pull: 0, components: [] },
          ],
          gutterX: 12,
          gutterY: 12,
        }

      }
      )


  ,
  customContainerNames: ['header', 'content', 'columns'],
};

export default CollapsiblePanelComponent;
