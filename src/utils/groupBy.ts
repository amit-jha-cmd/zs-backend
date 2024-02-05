function groupBy<T, K>(list: T[], getKey: (item: T) => K): Map<K, T[]> {
    return list.reduce((groupedMap, currentItem) => {
        const key = getKey(currentItem);
        const group = groupedMap.get(key) || [];
        group.push(currentItem);
        groupedMap.set(key, group);
        return groupedMap;
    }, new Map<K, T[]>());
}