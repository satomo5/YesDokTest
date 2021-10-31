import data from '../data'

export const state = () => ({
  article: null,
  recomendation: null,
  keyword: null,
  isSearch: false,
  width: null,
  site: 'artikel.yesdok.com'
})

export const mutations = {
  getArticle(state) {
    state.article = data.data
  },
  getArticleByCategory(state, payload) {
    state.article = data.data.filter(
      (item) => item.category.toLowerCase() === payload
    )
  },
  getArticleDetail(state, payload) {
    state.article = data.data.filter((item) => {
      return item.id === payload
    })[0]
  },
  getArticleRecomended(state, payload) {
    state.recomendation = data.data.filter((item) => {
      return item.id !== payload
    })
  },
  searchArticle(state, payload) {
    state.search = payload.param
    if (payload.status) {
      state.article = data.data.filter((item) => {
        return item.title.toLowerCase().includes(payload.param.toLowerCase())
        //   return item.title.toLowerCase() === payload.param.toLowerCase()
      })
    } else {
      state.article = data.data
    }
  },
  searchMobile(state) {
    state.isSearch = !state.isSearch
  },
  getKeywords(state) {
    state.keyword = data.data
      .map((item) => {
        return item.category.toLowerCase()
      })
      .filter((v, i, a) => a.findIndex((t) => t === v) === i)
  },
  getWidth(state, payload) {
    state.width = payload
  },
}
