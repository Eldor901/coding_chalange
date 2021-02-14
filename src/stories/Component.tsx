import React, {useState} from 'react';
import MultipleSelection, {Item} from "../components/MultipleSelection/MultipleSelection";

const Component = () => {
    const parentValues: string[] = [];

    const parentItems: Item[] = [];
    for (let i = 10; i < 36; i++) {
        parentItems.push({
            id: i.toString(),
            title: i.toString(36) + i
        });
    }

    function handleChange(value: string[]) {
        console.log(`selected ${value}`);
    }

    return (
        <div style={{width: '500px'}}>
            <MultipleSelection items={parentItems} value={parentValues} onChange={handleChange} />
        </div>
    );
}

export default Component;