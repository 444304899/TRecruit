import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    SdShow:false
  },
  mutations: {
    SdChange (state){
      state.SdShow = !state.SdShow
    }
  },
  actions: {

  }
})
