const URL_TOKEN = "http://sandbox-api.lomadee.com/v3/16333499803995e42c511";
const source_id = "35763726"

export default async (keyword, page) => {

    let Lomadee = await fetch(`${URL_TOKEN}/offer/_search?sourceId=${source_id}&keyword=${keyword}&page=${page}`).catch(error => console.error(error));
    const products = await Lomadee.json();

    if (products.error) {
        return null
    }
    return products;
}

export const categorias = async (keywords) => {
    let Lomadee = await fetch(`${URL_TOKEN}/category/_search?sourceId=${source_id}&keyword=${keywords}`).catch(error => console.log(error))
    let products = await Lomadee.json()
    if (products.error) {
        return null
    }
    return products
}