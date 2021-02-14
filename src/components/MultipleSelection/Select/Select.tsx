import React, {FC, useContext, useState} from 'react';
import Option from "../Option/Option";
import {MultipleSelectionContext} from "../../../context/MultipleSelectionContext";
import {Item} from "../MultipleSelection";
import SelectedElement from "../SelectedElements/SelectedElement";
import './select.css'
import {useRef} from "react";
import useOutsideClick from "../../../hooks/outsideClick";



interface Props {
    items: Item[];
}

const SelectState = (state: boolean) => {
    if(state)
    {
        return "drop_select_opened"
    }
    return "drop_select_closed"
}



const Select : FC<Props> = ({items}) => {
    const {selectedValues, setSelectedValues, allItems, setAllItems} = useContext(MultipleSelectionContext);
    const [inputValue, setInputValue] = useState<string>("");
    const [openSelectMenu, setOpenSelectMenu] = useState<boolean>(false);
    const ref: any = useRef();

    const clearData = () => {
        if (setSelectedValues) {
            setSelectedValues([]);
        }
    }

    const handleChange = (e: any)=>{
        let formValue: string = e.target.value;
        setInputValue(formValue);
        if (setAllItems) {
            let filteredArray = items?.filter(val => val.title.includes(formValue));
            setAllItems(filteredArray);
        }
    }

    useOutsideClick(ref, () => {
        setOpenSelectMenu(false);
    });



    return (
        <div className="container_width" ref={ref}>
            <div className={`input_content`}  onClick={()=>setOpenSelectMenu(!openSelectMenu)} >
                    {selectedValues?.map((val, index)=>
                        <SelectedElement  key={index} value={val}/>
                    )}
                { selectedValues?.length ?  <div className={`delete pointer`} onClick={clearData}>X</div> : null}
                    <input value={inputValue} onChange={handleChange} />
            </div>
            <div className="block_select">
                <select  multiple className={SelectState(openSelectMenu)} >
                    {allItems?.map((item)=> {
                        let selected: boolean =  !!selectedValues?.includes(item.title);
                        return <Option key={item.id} title={item.title} selected={selected}/>
                    })}
                </select>
            </div>
        </div>
    );
};

export default Select;