const URL_TOKEN = "http://sandbox-api.lomadee.com/v3/16333499803995e42c511";

export default async (keyword, page) => {

    let Lomadee = await fetch(`${URL_TOKEN}/offer/_search?sourceId=35763726&keyword=${keyword}&page=${page}`).catch(error => console.error(error));
    const products = await Lomadee.json();

    if (products.error) {
        return null
    }
    return products;
}

// export const pagination = async (cateogries) => {
//     await fetch(`${URL_TOKEN}/offer/_search?sourceId=35763726&keyword=${keyword}&page=${page}`)
// }

