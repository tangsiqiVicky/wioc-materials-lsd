import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        themeColor: 'ffffff'
    },
    mutations:{
        //更新主题颜色
        setThemeColor(state,curColor){
            this.state.themeColor = curColor
        }
    }
})
export default store;
