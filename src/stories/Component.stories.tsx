import Component from './Component';
import MultipleSelection, {Item} from "../components/MultipleSelection/MultipleSelection";


export default {
    title: "Components/Select",
    component: Component
};

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


export const SelectMultiple = args => <div style={{width: "400px"}}><MultipleSelection {...args} /></div>;

SelectMultiple.args = {
    items: parentItems,
    value: parentValues,
    onChange: handleChange,
}