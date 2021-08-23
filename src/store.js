import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

const state = {
  numbers: [1, 2, 3],
  wxUserInfo:{},
  UserInfo: {}
}

const mutations = {
  ADD_NUMBER(state, payload) {
    state.numbers.push(payload)
  },
  SET_WXUSERINFO(state, payload) {
    state.wxUserInfo = payload
  },
  SET_UserInfo(state, payload) {
    state.UserInfo = payload
  }
}

const actions = {
  addNumber(context, number) {
    context.commit('ADD_NUMBER', number)
  }
}

const getters = {
  getNumbers(state) {
    return state.numbers
  },
  getWxUserInfo(state) {
    return state.wxUserInfo
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
