import { get, writable } from "svelte/store";
import lomadee, { categorias, offerID } from "./Lomadee"

const store = writable([], () => {
    setProduct();
    return () => { };
});



export const setProduct = async () => {

    const getParams = await window.location.search;

    const urlOffParams = new URLSearchParams(getParams);
    const keyword = urlOffParams.get('keyword')
    const categorias = urlOffParams.get('categories')
    // const minPrice = urlOffParams.get('minprice')
    // const maxPrice = urlOffParams.get('maxprice')
    // const size = urlOffParams.get('size')

    const products = await lomadee(keyword, 1, categorias).catch(error => console.error(error));

    if (products.error) {

        return null
    }
    store.set(products)

}



export const updateProducts = async (key, pagination, categoryID) => {
    const getParams = await window.location.search;
    const urlOffParams = new URLSearchParams(getParams);
    const keyword = urlOffParams.get('keyword')
    const categorias = urlOffParams.get('categories')
    const products = await lomadee(keyword, pagination, categorias).catch(error => console.log(error));

    if (products) {
        store.update(storeValue => products)
    }


}


export default store;