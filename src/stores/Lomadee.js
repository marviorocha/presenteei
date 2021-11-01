const URL_TOKEN = "http://sandbox-api.lomadee.com/v3/16333499803995e42c511";
const source_id = "35763726"

export default async (keyword, page, categorias) => {
    const words = keyword || [];

    let Lomadee = await fetch(`${URL_TOKEN}/offer/_search?sourceId=${source_id}&keyword=${words}&page=${page}&categoryId=${categorias}`)
        .catch(error => { console.error(error); });

    const products = await Lomadee.json();

    if (products.error) {
        return null
    }
    return products;
}

// Categoria de Ofertas

export const categorias = async (keywords) => {

    let Lomadee = await fetch(`${URL_TOKEN}/category/_search?sourceId=${source_id}&keyword=${keywords}`).catch(error => console.log(error))
    let products = await Lomadee.json()
    if (products.error) {
        return null
    }
    return products
}

// Ofertas específica

export const offerID = async (id, storeId) => {
    let Lomadee = await fetch(`${URL_TOKEN}/offer/_id/${id}/?sourceId=${source_id}&storeId=${storeId}`).catch(error => { console.log(error) })
    let products = await Lomadee.json()
    if (products.error) {
        return null
    }
    return products
}