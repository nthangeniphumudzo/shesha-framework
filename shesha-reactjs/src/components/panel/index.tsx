import React, { FC, useEffect, useRef, useState } from 'react';
import { Collapse, Skeleton } from 'antd';
import { CollapseProps } from 'antd/lib/collapse';
import classNames from 'classnames';
import styled from 'styled-components';
import { useStyles } from './styles/styles';

const { Panel } = Collapse;

export interface ICollapsiblePanelProps extends CollapseProps {
  isActive?: boolean;
  header?: React.ReactNode;
  className?: string;
  extraClassName?: string;
  style?: React.CSSProperties;
  showArrow?: boolean;
  forceRender?: boolean;
  extra?: React.ReactNode;
  noContentPadding?: boolean;
  loading?: boolean;
  collapsedByDefault?: boolean;
  bodyColor?: string;
  isSimpleDesign?: boolean;
  hideCollapseContent?: boolean;
  hideWhenEmpty?: boolean;
  parentPanel?: boolean;
  readonly: boolean;
  headerHeight?: string | number;
}

/**
 * There was an error 
 * TS4023: Exported variable 'xxx' has or is using name 'zzz' from external module "yyy" but cannot be named.
 * 
 * found a solution
 * https://stackoverflow.com/questions/43900035/ts4023-exported-variable-x-has-or-is-using-name-y-from-external-module-but
 * 
 */

const StyledCollapse: any = styled(Collapse) <
  Omit<ICollapsiblePanelProps, 'collapsible' | 'showArrow' | 'header' | 'extraClassName' | 'extra' | 'radius'>
>`
  .ant-collapse-header{
    visibility: ${({ hideCollapseContent }) => (hideCollapseContent ? 'hidden' : 'visible')};
    border-top: ${({ parentPanel }) => (parentPanel ? 'none' : ' 3px solid  #25b864')};
    border-left: ${({ parentPanel }) => (!parentPanel ? 'none' : ' 3px solid  #25b864')};
    font-size: ${({ parentPanel }) => (parentPanel ? '13px' : '16px')};
    font-weight: 'bold';
    
  }
  >.ant-collapse-item >.ant-collapse-header {
    display: flex;
    justify-content: center;
    align-items: center;
    height: ${({ headerHeight }) => (headerHeight ? headerHeight : '50px')};
  }

  .ant-collapse-content {
    .ant-collapse-content-box > .sha-components-container {
      background-color: ${({ bodyColor }) => bodyColor};
    }
  }
`;


export const CollapsiblePanel: FC<Omit<ICollapsiblePanelProps, 'radiusLeft' | 'radiusRight'>> = ({
  expandIconPosition = 'end',
  onChange,
  header,
  extra,
  children,
  noContentPadding,
  loading,
  className,
  extraClassName,
  style,
  collapsedByDefault = false,
  showArrow,
  collapsible,
  ghost,
  bodyColor = 'unset',
  isSimpleDesign,
  hideCollapseContent,
  hideWhenEmpty = false,
  headerHeight,
  readonly

}) => {
  // Prevent the CollapsiblePanel from collapsing every time you click anywhere on the extra and header
  const onContainerClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => event?.stopPropagation();
  const { styles } = useStyles();
  const [parentPanel, setParentPanel] = useState(false);
  const panelRef = useRef(null);

  useEffect(() => {
    let currentElement = panelRef.current;

    const currentElementParent = !readonly ?
      currentElement.parentElement.parentElement?.parentElement?.parentElement?.parentElement?.parentElement?.parentElement?.parentElement
      : currentElement.parentElement.parentElement?.parentElement.parentElement;

    if (currentElementParent.className.includes('ant-collapse')) {
      setParentPanel(true)
    } else {
      setParentPanel(false)
    }

  }, []);

  const shaCollapsiblePanelStyle = isSimpleDesign ? {} : styles.shaCollapsiblePanel;

  return (
    <StyledCollapse
      defaultActiveKey={collapsedByDefault ? [] : ['1']}
      onChange={onChange}
      expandIconPosition={expandIconPosition}
      className={classNames(shaCollapsiblePanelStyle, className, { [styles.noContentPadding]: noContentPadding, [styles.hideWhenEmpty]: hideWhenEmpty })}
      style={style}
      ghost={ghost}
      bodyColor={bodyColor}
      parentPanel={parentPanel}
      hideCollapseContent={hideCollapseContent}
      headerHeight={headerHeight}
    >
      <Panel
        key="1"
        collapsible={collapsible}
        className='sha-panel'
        showArrow={showArrow}
        ref={panelRef}
        header={header || ' '}
        extra={
          <span onClick={onContainerClick} className={extraClassName}>
            {extra}
          </span>
        }
      >
        <Skeleton loading={loading}>{children}</Skeleton>
      </Panel>
    </StyledCollapse>
  );
};

export default CollapsiblePanel;
