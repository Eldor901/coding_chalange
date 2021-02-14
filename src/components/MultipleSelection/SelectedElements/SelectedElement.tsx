import React, {FC, useContext} from 'react';
import {MultipleSelectionContext} from "../../../context/MultipleSelectionContext";
import './selectedElements.css';

interface Props {
    value: string,
}

const SelectedElement: FC<Props> = ({value}) => {
    const {selectedValues, setSelectedValues} = useContext(MultipleSelectionContext);

    const deleteSelectedValue = () =>
    {
        if (setSelectedValues) {
            setSelectedValues(selectedValues => selectedValues?.filter(val => val !== value));
        }
    }

    return (
        <>
            <div   className={`box`}>{value + " "}
                <i className={`delete_icon pointer`} onClick={deleteSelectedValue}>x</i>
            </div>
        </>
    );
};

export default SelectedElement;