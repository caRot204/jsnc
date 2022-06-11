import { createProduct } from "../api/Product";

const ProductAdd = {
    render: () => {
        return (
            `<div>
                <form>
                    <div class='form-group'>
                        <label>Tên</label>
                        <input class='form-control' id='name' />
                    </div>
                    <div class='form-group'>
                        <label>destription</label>
                        <input class='form-control' id='destription' />
                    </div>
                    <div class='form-group'>
                        <label>price</label>
                        <input class='form-control' id='price' />
                    </div>
                    <input class="form-check-input" type="checkbox" id="mySwitch" name="darkmode" value="yes" checked>
                        <label class="form-check-label" for="mySwitch">Dark Mode</label>
                        </div>
                    <div class='form-group'>
                        <button type='button' class='btn btn-success'>Tạo mới</button>
                    </div>
                </form>
            </div>`
        )
    },
    afterRender: () => {
        const submitBtn = document.querySelector('.btn');
        submitBtn.addEventListener('click', async () => {
            const name = document.querySelector('#name').value;
            const destription = document.querySelector('#destription').value;
            const price = document.querySelector('#price').value;

            // const submitData = {
            //     name: name,
            //     destription: destription,
            //     price: price,
            // };
            const submitData = { name, destription, price };

            console.log(submitData);

            await createProduct(submitData);
            window.location.replace('/Products')
        });
    }
};

export default ProductAdd;
