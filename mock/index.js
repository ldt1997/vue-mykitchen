import Mock from 'mockjs';
import data from './data.json';

Mock.setup({
  timeout: 800
})

export const getSeller = Mock.mock('/api/getSeller', data.seller);

export const getGoods = Mock.mock('/api/getGoods', data.goods);

export const submitOrder = Mock.mock('/api/submitOrder', {
  code: '200',
  data: {
    id: new Date().valueOf()
  }
});

export const getOrderDetail = Mock.mock(/\/api\/getOrderDetail\/\d+/, data.orderDetail);