import { writable, derived } from "svelte/store";
import lomadee from "./Lomadee"

// const urlParams = new URLSearchParams(window.location.search);

const store = writable([], () => {
    setProduct();

    return () => { }

});


export const setProduct = async (urlParams) => {
    const products = await lomadee("tecnologia", 1);
    store.set(products.offers)
}

export const updateProducts = async (key, pagination) => {
    const products = await lomadee(key, pagination)
    store.update(storeValue => products.offers)

}


export default store;