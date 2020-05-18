import { request } from "./request"
export function getShopList() {
  return request({
    url: "/data/category/category.json"
  })
}
export function getShopDetail(maitKey) {
  return request({
    url: "/data/category/subcategory/" + maitKey + ".json"
  })
}