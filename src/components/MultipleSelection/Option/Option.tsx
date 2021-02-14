import React, {FC, useContext} from 'react';
import {MultipleSelectionContext} from "../../../context/MultipleSelectionContext";
import './option.css';

interface Props {
    title: string,
    selected: boolean
}

const renderClassStyle = (selected: boolean) => {
    if(selected)
        return "option_selected"
    else
        return "option_default"
}

const Option: FC<Props> = ({title, selected}) => {
    const {selectedValues, setSelectedValues} = useContext(MultipleSelectionContext);

    const handleOnClickOption = (e: any) => {
        if (setSelectedValues && !selectedValues?.includes(title)) {
            setSelectedValues(prevState => [...prevState, title]);
        }else if(setSelectedValues && selectedValues?.includes(title))
        {
            setSelectedValues(selectedValues => selectedValues?.filter(val => val !== title));
        }
    }


    return (
        <>
            <option onClick={handleOnClickOption} className={renderClassStyle(selected)}>
                {title}
            </option>
        </>
    );
};

export default Option;