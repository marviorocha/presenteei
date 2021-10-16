import { writable, derived, get } from "svelte/store";
import lomadee from "./Lomadee"

const store = writable([], () => {
    setProduct();

    return () => console.log('no more subscribers');
});


export const setProduct = async () => {
    const urlParams = window.location.pathname.split('/');
    const products = await lomadee(urlParams[2], 1).catch(error => console.log(error));
    if (products) {
        store.set(products)
    }

}


export const updateProducts = async (key, pagination) => {
    const products = await lomadee(key, pagination).catch(error => console.log(error));

    if (products) {
        store.update(storeValue => products)
    }


}


export default store;