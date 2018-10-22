import Vue from 'vue'
import vuex from 'vuex'
import { navs_tree } from "../../api/api.js"
Vue.use(vuex)

export default new vuex.Store({
  state:{
    navs:[]
  },
  mutations:{
    get_navs(){
      navs_tree({
        "pid":''
      }).then(res => {
        this.navs = res
        console.log(this.navs)
      })
    }
  }
})
