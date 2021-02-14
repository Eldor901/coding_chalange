import React, {FC, useRef, useState} from 'react';
import './multipleSelection.css';
import {MultipleSelectionContext} from "../../context/MultipleSelectionContext";
import Select from "./Select/Select";

interface Props {
    // Empty placeholder. If not specified, defaults to "Please select".
    placeholder?: string;
    // Descriptors of available items.
    items: Item[];
    // Ids of selected items.
    value: string[];
    // Callback that is called with ids of selected items when the value changes.
    onChange: (selectedItems: string[]) => void;
}

export interface Item {
    // Unique identifier of an item.
    id: string;
    // Display text of an item.
    title: string;
}


const MultipleSelection: FC<Props> = ({items, value, onChange}) => {
    const [selectedValues, setSelectedValues] = useState<string[]>(value);
    const [allItems, setAllItems] = useState<Item[]>(items);
    onChange(selectedValues);


    return (
        <MultipleSelectionContext.Provider  value={{
           selectedValues, setSelectedValues, allItems, setAllItems
        }}>
            <Select items={items} />
        </MultipleSelectionContext.Provider>
    );
};

export default MultipleSelection;