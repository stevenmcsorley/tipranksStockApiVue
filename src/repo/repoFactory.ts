import StocksApi from './stocks'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const repositories: any = {
  stocksApi: StocksApi
}
export default {
  get: (name: string) => {
    return repositories[name]
  }
}
