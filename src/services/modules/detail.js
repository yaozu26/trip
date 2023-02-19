import HYRequest from '../request'

export function getDetailData(houseId) {
  return HYRequest.get({
    url: "detail/infos",
    params: {
      houseId
    }
  })
}