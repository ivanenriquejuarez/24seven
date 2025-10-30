import { categoryConfig } from "./categoryConfig";

export function getTopItems() {
    const results: any[] = [];

    Object.entries(categoryConfig).forEach(([categoryName, config]) => {
        // Step 1: FInd the top-rated item from config.data
        const topItem = config.data.reduce((highest: any, current: any) => {
            return current.rating > highest.rating ? current : highest
       })

       results.push({
        data: topItem,
        CardComponent: config.CardComponent,
        path: config.path,
        category: categoryName,
        propName: config.propName
       })
    })
    return results;
}