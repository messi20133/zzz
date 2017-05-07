import vuex_text from './Text'
import Base from './Base'
import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex);
const vuex_store  = new Vuex.Store({
    modules: {
        'text': vuex_text,
        'base': Base
    }
});
export {vuex_store}