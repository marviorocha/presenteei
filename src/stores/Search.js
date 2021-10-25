import { writable } from "svelte/store";
import lomadee, { categorias, offerID } from "./Lomadee"

const store = writable([], () => {
    setProduct();
    return () => { };
});


export const setProduct = async (id) => {
    const urlParams = window.location.pathname.split('/');
    const idProduct = await id;
    console.log(id)
    const products = await lomadee(idProduct, 1, urlParams[2]).catch(error => console.log(error));

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