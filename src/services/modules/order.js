import HYRequset from '../request'

export function getOrderData(order) {
  return HYRequset.get({
    url: "/order/list",
    params: {
      type: order
    }
  })
}