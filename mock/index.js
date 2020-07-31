import Mock from 'mockjs';
import data from './data.json';

export const getSeller = Mock.mock('/api/getSeller', data.seller);

export const getGoods = Mock.mock('/api/getGoods', data.goods);