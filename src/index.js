import Navigo from '../node_modules/navigo';
// import Navigo from 'navigo';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import News from './pages/News';
import Product from './pages/Product';
import ProductDetail from './pages/ProductDetail';
import ProductAdd from './pages/ProductAdd';

import 'bootstrap/dist/css/bootstrap.min.css';

// Khởi tạo đối tượng router
const router = new Navigo('/', { linksSelector: 'a' });

const render = async (content, id) => {
    // content sẽ là toàn bộ component
    // cần thêm tham số vào hàm này để truyền id cho những phần detail
    document.querySelector('#header').innerHTML = Header.render();
    document.querySelector('#content').innerHTML = await content.render(id);
    document.querySelector('#footer').innerHTML = Footer.render();

    // Sau khi content đã render xong thì afterRender mới được chạy
    if (content.afterRender) {
        content.afterRender();
    }
};

router.on({
    '/': () => render(Home),
    '/about': () => render(About),
    '/news': () => render(News),
    '/Products': () => render(Product),
    '/Products/add': () => render(ProductAdd),
    '/Products/detail/:id': (data) => render(ProductDetail, data.data.id),
});
router.resolve();

// render();

// --------------------------------

