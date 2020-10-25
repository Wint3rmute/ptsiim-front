import Vue from 'vue';
import Vuex from 'vuex';
import API from '@/api/api.ts';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loggedIn: false,
    wrongPassword: false,
    username: '',
    email: '',
    userRole: '',

    testValue: false
  },
  mutations: {
    setTestValue(state, value) {
      state.testValue = value;
    },

    setWrongPassword(state, value) {
      state.wrongPassword = value;
    },

    setLoggedIn(state, value) {
      state.loggedIn = value;
    }
  },
  actions: {
    signIn(context, loginData) {
      console.log(`logging in with u: ${loginData.username} and p: ${loginData.password}`);

      API.signIn(loginData.username, loginData.password).then(
        response => {
          console.log('Response');
          console.log(response);
          context.commit('setLoggedIn', true);
          context.commit('setWrongPassword', false);
        }
      ).catch(
        error => {
          console.log("Error");
          console.log(error);
          context.commit('setWrongPassword', true);
          context.commit('setLoggedIn', false);
        }
      );
    }
  },
  modules: {
  },

  getters: {
    getTestValue: state => state.testValue,

    getWrongPassword: state => state.wrongPassword,

    getLoggedIn: state => state.loggedIn
  }
});
