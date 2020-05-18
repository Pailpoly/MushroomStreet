import { request } from './request'
export function getDetailData(iid) {
  return request({
    url: '/data/detail/detail/' + iid + '.json'
  })
}

export function getRecommendData () { 
  return request({
    url:'/data/detail/detail/recommend.json'
  })
 }

export class GoodsInfo {
  constructor(columns, itemInfo, shopInfo) {
    this.title = itemInfo.title
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.services = shopInfo.services
    this.desc=itemInfo.desc
    this.highNowPrice=itemInfo.highNowPrice
  }
}
export class GoodsParams{
  constructor(info,rule){
    this.img=info.images?info.images[0] : ''
    this.info=info.set
    this.size=rule.tables
    
  }
}
