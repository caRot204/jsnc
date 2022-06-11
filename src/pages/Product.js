import { getProducts, deleteProduct } from "../api/Product";
import reRender from '../helpers/reRender';

const Product = {
    render: async () => {



        const response = await getProducts();

        const { data } = response;



        return `<div>
            ${data.map((Product) => (
            `<div>
                        <div>ID: ${Product.id}</div>
                        <div>Name: ${Product.name}</div>
                        <div>destription: ${Product.destription}</div>
                        <div>price: ${Product.price}</div>
                        <div>status: ${Product.status}</div>
                        <div>
                            <a href="/Products/detail/${Product.id}">
                                <button class='btn btn-info'>Chi tiet</button>
                            </a>
                            <button
                                class='btn btn-danger'
                                data-id="${Product.id}"
                                data-name="${Product.name}"
                            >Xoa</button>
                        </div>
                    </div>`
        )).join('')
            }
        </div>`
    },
    afterRender: () => {
        // Đây là nơi thực thi nghiệp vụ định nghĩa sự kiện xoá
        // 1. Tìm toàn bộ nút xoá và thêm sự kiện click cho nó
        const deleteBtns = document.querySelectorAll('.btn-danger');
        deleteBtns.forEach((btn) => {
            // addEventListener('tên sự kiện', khi sự kiện kích hoạt sẽ thực thi hàm)
            btn.addEventListener('click', async () => {
                // Tìm xem chúng ta muốn xoá thằng nào
                // const data = btn.dataset; // {id: '', name: ''} với id ~ data-id, name ~ data-name
                const btnId = btn.dataset.id;
                // Thực hiện xoá
                await deleteProduct(btnId);
                // window.location.reload();
                await reRender('#content', Product);
            });

        });
    }
};




export default Product;
