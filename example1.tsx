import {FC} from "react";

interface Props {
    items: Item[];
}

interface Item {
    id: string;
    title: string;
    description: string;
}

interface childItem {
    item: Item,
}

const Item: FC<childItem> = ({item}) => {
    return <h1>{item.title}</h1>
};

const Component: FC<Props> = ({ items }) => {
    return (
        <div>
            {items.map((item, index) =>
                <Item
                    key={item.id}
                    item={item}
                />
            )}
        </div>
    );
};


/*

As we have id provided  inside of index  we should use ids. Indices as keys if the order of the elements can change
it can effect to performance of component

 */