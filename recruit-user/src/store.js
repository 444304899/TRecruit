import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    SdShow:false,
    SelectedList:["技术研发类","质量管理类","技术运营类","安全技术类","AI、算法与大数据","企管类"]
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
