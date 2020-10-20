import BaseApi from './baseApi'

export default {
  getPriceTargets (stockSymbol: string) {
    console.log('hggjkjghkjg')
    return BaseApi.get(`/stocks.php?getPriceTargets=${stockSymbol}`)
  }
}
