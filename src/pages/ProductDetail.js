import { getProduct } from "../api/Product";

const ProductDetail = {
    render: async (id) => {
        const response = await getProduct(id);
        const { data } = response; // const data = response.data;

        return (
            `<div>
                <div>ID: ${data.id}</div>
                <div>Name: ${data.name}</div>
                <div>destription: ${data.destription}</div>
                <div>price: ${data.price}</div>
                <div>status: ${data.status == 1 ? 'true' : 'false'}</div>
                </div>
            </div>`
        );
    }
};

export default ProductDetail;
