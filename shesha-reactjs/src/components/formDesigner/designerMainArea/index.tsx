import { ComponentPropertiesTitle } from '../componentPropertiesTitle';
import ParentProvider from '@/providers/parentProvider';
import React, { FC, useEffect } from 'react';
import Toolbox from '../toolbox';
import { ConfigurableFormRenderer, SidebarContainer } from '@/components';
import { DebugPanel } from '../debugPanel';
import { MetadataProvider, useCanvas, useForm } from '@/providers';
import { useFormDesignerActions, useFormDesignerState } from '@/providers/formDesigner';
import { useStyles } from '../styles/styles';
import { ComponentPropertiesPanel } from '../componentPropertiesPanel';
import ConditionalWrap from '@/components/conditionalWrapper';

export interface IDesignerMainAreaProps {

}

export const DesignerMainArea: FC<IDesignerMainAreaProps> = () => {
    const { isDebug, readOnly } = useFormDesignerState();
    const { setSelectedComponent } = useFormDesignerActions();
    const { form, formMode, formSettings } = useForm();
    const { designerWidth, zoom } = useCanvas();
    const { styles } = useStyles();

    useEffect(() => {
        if (formMode !== 'designer') {
            setSelectedComponent(null);
        }
    }, [formMode]);

    if (formMode !== 'designer') {
        return (
            <div className={`${styles.mainArea} ${styles.previewBorderTop10}`}>
                <div style={{ width: designerWidth, zoom: `${zoom}%`, overflow: 'auto', margin: '0 auto' }}>
                    <ConditionalWrap
                        condition={Boolean(formSettings?.modelType)}
                        wrap={(children) => (<MetadataProvider modelType={formSettings?.modelType}>{children}</MetadataProvider>)}
                    >
                        <ParentProvider model={{}} formMode={formMode}>
                            <ConfigurableFormRenderer form={form} className={undefined}  >
                                {isDebug && (
                                    <DebugPanel formData={form.getFieldValue([])} />
                                )}
                            </ConfigurableFormRenderer>
                        </ParentProvider>
                    </ConditionalWrap>
                </div>
            </div>
        );
    } else {
        return (
            <div className={styles.mainArea}>
                <SidebarContainer
                    leftSidebarProps={
                        readOnly
                            ? null
                            : {
                                title: 'Builder Widgets',
                                content: () => <Toolbox />,
                                placeholder: 'Builder Widgets',
                            }
                    }
                    rightSidebarProps={{
                        title: () => <ComponentPropertiesTitle />,
                        content: () => <ComponentPropertiesPanel />,
                        placeholder: 'Properties',
                    }}
                >
                    <div style={{ width: designerWidth, zoom: `${zoom}%`, overflow: 'auto', margin: '0 auto' }}>
                        <ConditionalWrap
                            condition={Boolean(formSettings?.modelType)}
                            wrap={(children) => (<MetadataProvider modelType={formSettings?.modelType}>{children}</MetadataProvider>)}
                        >
                            <ParentProvider model={{}} formMode='designer'>
                                <ConfigurableFormRenderer form={form} className={formMode === 'designer' ? styles.designerWorkArea : undefined}  >
                                    {isDebug && (
                                        <DebugPanel formData={form.getFieldValue([])} />
                                    )}
                                </ConfigurableFormRenderer>
                            </ParentProvider>
                        </ConditionalWrap>

                    </div>
                </SidebarContainer>
            </div>
        );
    }
};
