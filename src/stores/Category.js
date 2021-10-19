import Categories from "../LocalCategories.js"
import { writable } from "svelte/store"


const categories = writable([...Categories], () => {

});

export const setCategories = async () => {
    const response = await [...Categories]
    const responseCategories = await response.json()
    return categories.subscribe(responseCategories);
}



export default categories;