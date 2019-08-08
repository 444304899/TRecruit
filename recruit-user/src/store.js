import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    SdShow:false,
    SelectedList:[]
  },
  mutations: {
    SdChange (state){
      state.SdShow = !state.SdShow
    },
    addSelectedList(state,val){
      for (let i of state.SelectedList) {
        if(i==val){
          return;
        }
      };
      state.SelectedList.push(val);
      
      //添加选择
    },
    delSelectedList(state,ind){
      state.SelectedList.splice(ind,1);
      //删除选择
    },
    CleanSelectedList(state){
      state.SelectedList = [];
      //清空选择
    }
  },
  actions: {

  }
})
