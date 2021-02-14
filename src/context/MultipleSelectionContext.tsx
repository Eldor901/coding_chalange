import React, {Dispatch} from "react";
import {Item} from "../components/MultipleSelection/MultipleSelection";


type ContextProps = {
    selectedValues: string[];
    setSelectedValues:  Dispatch<React.SetStateAction<string[]>>;
    allItems: Item[];
    setAllItems: Dispatch<React.SetStateAction<Item[]>>
};

export const MultipleSelectionContext = React.createContext<Partial<ContextProps>>({});