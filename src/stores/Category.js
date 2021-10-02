import Categories from "../LocalCategories.js"
import {writable} from "svelte/store"

const categories = writable([...Categories]);

export default categories;