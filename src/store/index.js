import Vue from 'vue'
import Vuex from 'vuex'
import $http from '../helpers/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    messages: [],
    loading: false,
  },
  mutations: {
    pushMessage(state, param) {
      // param => newly posted message
      state.messages.push(param);
    },
    addMessages(state, param) {
      // param => all messages, coming from the messages api
      // eslint-disable-next-line no-debugger
      debugger;
      state.messages = param; // we can you Array.concat methods, if we wish to add pagination
    },
    removeMessage(state, param) {
      // param => deleted message api
      state.messages.splice(state.messages.indexOf(param), 1);
    },
    changeLoadingState(state, param) {
      // param => changing state for loading
      state.loading = param;
    }
  },
  actions: {
    NEW_MESSAGE({commit}, param) {
      // commit calling pushMessage to update message state using mutation
      commit('pushMessage', param)
    },
    GET_MESSAGES({commit}, param) {
      // commit calling changeLoadingState to update loading state using mutation
      commit('changeLoadingState', true);
      $http.get('messages', param).then(
        // commit calling addMessages to update message state using mutation
        (resp) => commit('addMessages', resp.data),
        (err) => console.log(err)
      )
    },
    DELETE_MESSAGE({commit}, param) {
      // commit calling removeMessage to update message state using mutation
      commit('removeMessage', param)
    }
  },
  modules: {
  }
})
