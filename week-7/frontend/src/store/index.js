import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 0,
    schoolkids: [],
    schoolkid: {}
  },
  mutations: {
    SET_COUNTER(state, newCount) {
      state.counter = newCount
    },
    SET_SCHOOLKIDS(state, data) {
      state.schoolkids = data
    },
    SET_SCHOOLKID(state, data) {
      state.schoolkid = data
    }
  },
  actions: {
    incrementCounter({ commit, state }) {
      const newCount = state.counter + 1
      commit('SET_COUNTER', newCount)
    },
    async fetchSchoolkids({ commit }) {
      const result = await axios.get('http://localhost:3010/schoolkid/all/json')
      console.log("Result " + result)
      commit('SET_SCHOOLKIDS', result.data)
    },
    async fetchSchoolkid({ commit }, id) {
      const result = await axios.get(`http://localhost:3010/schoolkid/${id}/json`)
      
      commit('SET_SCHOOLKID', result.data)
    }
  },
  modules: {
  }
})
