import ComponentsContainer from '@/components/formDesigner/containers/componentsContainer';
import DataTableProvider from '@/providers/dataTable';
import React, {
    FC,
    useMemo
} from 'react';
import { ConfigurableFormItem } from '@/components';
import { evaluateString } from '@/providers/form/utils';
import { evaluateYesNo } from '@/utils/form';
import {
    useForm,
    useFormData,
    useNestedPropertyMetadatAccessor
} from '@/providers';
import { useFormEvaluatedFilter } from '@/providers/dataTable/filters/evaluateFilter';
import { ITableContextComponentProps } from './models';
import { useStyles } from '@/components/formDesigner/styles/styles';

interface ITableContextInnerProps extends ITableContextComponentProps {
}

export const TableContextInner: FC<ITableContextInnerProps> = (props) => {
    const { sourceType, entityType, endpoint, id, propertyName, componentName, allowReordering } = props;
    const { formMode } = useForm();
    const { data } = useFormData();
    const { styles } = useStyles();


    const propertyMetadataAccessor = useNestedPropertyMetadatAccessor(props.entityType);
    const permanentFilter = useFormEvaluatedFilter({ filter: props.permanentFilter, metadataAccessor: propertyMetadataAccessor });

    const isDesignMode = formMode === 'designer';

    const getDataPath = evaluateString(endpoint, { data });

    const configurationWarningMessage = !sourceType
        ? 'Select `Source type` on the settings panel'
        : sourceType === 'Entity' && !entityType
            ? 'Select `Entity Type` on the settings panel'
            : sourceType === 'Url' && !endpoint
                ? 'Select `Custom Endpoint` on the settings panel'
                : sourceType === 'Form' && !propertyName
                    ? 'Select `propertyName` on the settings panel'
                    : null;

    if (isDesignMode && configurationWarningMessage)
        return (
            <div
                onDrop={(event) => {
                    event.preventDefault();
                    return;
                }}
                style={{ pointerEvents: 'none' }}
            >
                <ComponentsContainer containerId={id} render={() => {
                    return <div className={styles.shaDropHint}>Drag and Drop form component disabled</div>
                }
                }
                    debugMode={true} />
            </div>
        );

    const provider = (getFieldValue = undefined, onChange = undefined) => (
        <DataTableProvider
            userConfigId={props.id}
            entityType={entityType}
            getDataPath={getDataPath}
            propertyName={propertyName}
            actionOwnerId={id}
            actionOwnerName={componentName}
            sourceType={props.sourceType}
            initialPageSize={props.defaultPageSize ?? 10}
            dataFetchingMode={props.dataFetchingMode ?? 'paging'}
            getFieldValue={getFieldValue}
            onChange={onChange}
            grouping={props.grouping}
            sortMode={props.sortMode}
            strictSortBy={props.strictSortBy}
            strictSortOrder={props.strictSortOrder}
            standardSorting={props.standardSorting}
            allowReordering={evaluateYesNo(allowReordering, formMode)}
            permanentFilter={permanentFilter}
        >
            <ComponentsContainer containerId={id} />
        </DataTableProvider>
    );

    if (props?.hidden) {
        return null;
    }
    return sourceType === 'Form'
        ? <ConfigurableFormItem model={{ ...props, hideLabel: true }} wrapperCol={{ md: 24 }}>
            {(value, onChange) => provider(() => value, onChange)}
        </ConfigurableFormItem>
        : provider();
};

export const TableContext: FC<ITableContextComponentProps> = (props) => {

    const uniqueKey = useMemo(() => {
        return `${props.sourceType}_${props.propertyName}_${props.entityType ?? 'empty'}`; // is used just for re-rendering
    }, [props.sourceType, props.propertyName, props.entityType]);

    return <TableContextInner key={uniqueKey} {...props} />;
};
