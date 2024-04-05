"use client";
import React from 'react';
import { PageWithLayout } from '@/interfaces';
// import { IModelItem } from '@/interfaces/modelConfigurator';
// import { ListEditor, SidebarContainer } from '@/components';
// import { nanoid } from '@/utils/uuid';
// import { Item } from '@/components/modelConfigurator/propertiesEditor/renderer-new/item';
// import { ItemsContainer } from '@/components/modelConfigurator/propertiesEditor/renderer-new/itemsContainer';
// import { ModelItemProperties } from '@/components/modelConfigurator/propertiesEditor/renderer-new/modelItemProperties';
import { Resizable } from 're-resizable';


// type ItemType = IModelItem;

const Page: PageWithLayout<{}> = () => {
    // const [value, setValue] = useState<ItemType[]>();
    // const [selectedItem, setSelectedItem] = useState<ItemType>();
    // const [readOnly] = useState(false);

    // const onSelectionChange = (item: ItemType) => {
    //     setSelectedItem(item);
    // };

    // const onItemUpdate = (newValues: ItemType) => {
    //     if (!selectedItem || selectedItem.id !== newValues.id) return;

    //     Object.assign(selectedItem, newValues);
    //     setValue([...value]);
    // };

    return (
        <div>
            <h1>Playground</h1>


<Resizable
  defaultSize={{
    width: 320,
    height: 200,
  }}
  enable={{ top:false, right:true, bottom:false, left:true, topRight:false, bottomRight:false, bottomLeft:false, topLeft:false }}
>
    <div style={{ width: '100%', height: '100%', background: 'lightblue' }} />
</Resizable>
            {/* <div style={{ padding: "10px 100px" }}>
                <SidebarContainer
                    rightSidebarProps={{
                        open: true,
                        title: 'Properties',
                        content: <ModelItemProperties item={selectedItem} onChange={onItemUpdate} />,
                    }}
                >
                    <ListEditor<ItemType>
                        value={value}
                        onChange={setValue}
                        initNewItem={(_items) => ({
                            id: nanoid(),
                            name: 'New Property',
                            label: '',
                            value: '',
                        })}
                        readOnly={readOnly}
                        selectionType='single'
                        onSelectionChange={onSelectionChange}
                    >
                        {({ item, index }) => {
                            return (
                                <Item
                                    itemProps={item}
                                    index={[index]}
                                    key={item?.id}
                                    containerRendering={(args) => (<ItemsContainer {...args} />)}
                                />
                            );
                        }}
                    </ListEditor>
                </SidebarContainer>
            </div> */}
        </div>
    );
};

export default Page;