import { writable } from "svelte/store";
import lomadee, { categorias, offerID } from "./Lomadee"

const store = writable([], () => {
    setProduct();
    return () => { };
});


export const setProduct = async (categoryID) => {
    const urlParams = window.location.pathname.split('/');

    const products = await lomadee(urlParams[2], 1, categoryID).catch(error => console.log(error));
    if (products) {
        store.set(products)
    }

}


export const updateProducts = async (key, pagination, categoryID) => {
    const products = await lomadee(key, pagination, categoryID).catch(error => console.log(error));

    if (products) {
        store.update(storeValue => products)
    }


}


export default store;