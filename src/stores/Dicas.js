import { writable } from "svelte/store";
import { categorias } from "./Lomadee";
const storeDicas = writable([], () => {
    setCategorias()
});


export const setCategorias = async (params) => {
    const categoria = await categorias(params).catch(error => console.log(error))
    return storeDicas.set(categoria.categories)
}

 

export default storeDicas;