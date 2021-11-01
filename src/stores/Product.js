import { writable } from "svelte/store";
import { offerID } from "./Lomadee";
const store = writable([], () => {
    setOffer();
    return () => { };
});


const setOffer = async () => {

    const params = await window.location.search;
    const getUrlParams = new URLSearchParams(params);
    const id = getUrlParams.get('id');
    const storeID = getUrlParams.get('store');

    const products = await offerID(id, storeID).catch(error => console.error(error));

    if (products) {
        store.set(products.offers)
    }

}

export default store;