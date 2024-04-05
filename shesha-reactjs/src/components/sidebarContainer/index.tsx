import classNames from 'classnames';
import React, { FC, PropsWithChildren, ReactNode, useMemo } from 'react';
import { ISidebarProps, SidebarPanelPosition } from './models';
import { SidebarPanel } from './sidebarPanel';
import { useStyles } from './styles/styles';
import { useForm } from '@/providers/form';
import { Resizable } from 're-resizable';


export interface ISidebarContainerProps extends PropsWithChildren<any> {
  /**
   * Left sidebar props
   */
  leftSidebarProps?: ISidebarProps;

  /**
   * Right sidebar props
   */
  rightSidebarProps?: ISidebarProps;

  /**
   * Container header
   */
  header?: ReactNode | (() => ReactNode);

  /**
   * sidebar width. By default it's 250px
   */
  sideBarWidth?: number;

  allowFullCollapse?: boolean;
}

export const SidebarContainer: FC<ISidebarContainerProps> = ({
  leftSidebarProps,
  rightSidebarProps,
  header,
  children,
  allowFullCollapse = false,
  noPadding,
}) => {
  const { styles } = useStyles();
  const {formWidth,zoom}=useForm();
  const renderSidebar = (side: SidebarPanelPosition) => {
    const sidebarProps = side === 'left' ? leftSidebarProps : rightSidebarProps;
    const isLeft = side === 'left';
    const isRight = side === 'right';
    return sidebarProps
      ? (
        <Resizable
        // minWidth={230}
        
  
    enable={{ top:false, right:isLeft||isRight, bottom:false, left:isLeft||isRight, topRight:false, bottomRight:false, bottomLeft:false, topLeft:false }}
    
  >
      <SidebarPanel {...sidebarProps} allowFullCollapse={allowFullCollapse} side={side} />
      </Resizable>)
      : null;
  };

  const magnifiedWidth = useMemo(()=>formWidth * (zoom/100),[formWidth,zoom]);

  return (
    <div className={styles.sidebarContainer}>
      {header && <div className={styles.sidebarContainerHeader}>{typeof header === 'function' ? header() : header}</div>}

      <div className={styles.sidebarContainerBody}>

{renderSidebar('left')}
 
       

        <div
          className={classNames(
            styles.sidebarContainerMainArea,
            { 'both-open': leftSidebarProps?.open && rightSidebarProps?.open },
            { 'left-only-open': leftSidebarProps?.open && !rightSidebarProps?.open },
            { 'right-only-open': rightSidebarProps?.open && !leftSidebarProps?.open },
            { 'no-left-panel': !leftSidebarProps },
            { 'no-right-panel': !rightSidebarProps },
            { 'no-padding': noPadding },
            { 'allow-full-collapse': allowFullCollapse }

          )}
        >
          <div className={styles.sidebarContainerMainAreaBody} style={{width:`${magnifiedWidth}%`, zoom:`${zoom}%`,overflow:'auto'}}>{children}</div>
        </div>

        {renderSidebar('right')}
      </div>
    </div>
  );
};