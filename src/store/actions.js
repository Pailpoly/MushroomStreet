
export default {
  addCart(context, payload) {
    let oldCart = context.state.cartList.find(item => item.iid == payload.iid)
    if (oldCart) {
      context.commit('addCount', oldCart)
    } else {
      payload.count = 1
      context.commit('addToCart', payload)
    }
  }
}