import Vue from "vue";
import Vuex from "vuex";
import calculator from "./calculator";

Vue.use(Vuex);
const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  modules: {
    calculator
  },
  strict: debug
});
