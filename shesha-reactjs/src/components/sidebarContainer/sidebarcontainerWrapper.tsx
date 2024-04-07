import React, { FC, useState } from 'react';
import { SidebarPanel, SidebarPanelProps } from './sidebarPanel';
import { useStyles } from './styles/styles';
import { Resizable } from 're-resizable';


const ResizableWrapper: FC<SidebarPanelProps> = ({...props}) => {
    const { styles } = useStyles();

    const { onOpen, onClose,defaultOpen=true ,open} = props;

    const isControllable = open !== undefined;

    const [isOpen, setIsOpen] = useState(isControllable ? open : defaultOpen);

    const realOpen = isControllable ? open : isOpen;


    const handleClick = () => {
        const handler = realOpen ? onClose : onOpen;
        if (handler)
            handler();
        if (!isControllable)
            setIsOpen(!isOpen);
    };


    if(!props.resizable || (props?.resizable && !realOpen)){
        return  <SidebarPanel {...props} handleClick={handleClick} open={realOpen}/>;
    };

   const isLeft = props.side === 'left';

    return (
      <Resizable
        minWidth={230}
        maxWidth={300}
        className={isLeft?styles.leftResizer:styles.rightResizer}
        boundsByDirection={true}
        enable={{ right:true,left:!isLeft}}>
        <SidebarPanel {...props} onClose={close} handleClick={handleClick} open={realOpen}/>
      </Resizable>
    );
  };

export default ResizableWrapper;