


const definedItems = <T extends {}>(array: T[]): T[] => {
    const outputArray: T[] = [];
    array.forEach(item => {
        if (item) outputArray.push(item);
    });
    return outputArray;
}


/*

used type any in array  it is better use type system

*/