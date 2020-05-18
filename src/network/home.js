import { request } from './request';

export function getHomeMultidata() {
  return request({
    url:'data/home/multidata/multidata.json',
    params:{
      
    }
  })
}

 export function getHomeGoods(type,page) {
  return request({
    url:'/data/home/data/'+type+'/'+page+'.json'
  })
}