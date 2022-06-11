import api from './axios';

const prefix = '/Products';

export const getProducts = () => api.get(prefix);

export const getProduct = (id) => api.get(`${prefix}/${id}`);

export const deleteProduct = (id) => api.delete(`${prefix}/${id}`);

//phương thức post của axios nhận 2 tham số là endpoint và dữ liệu
export const createProduct = (data) => api.post(prefix, data);