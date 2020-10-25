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
    accessToken: '',

    testValue: false
  },
  mutations: {
    setTestValue(state, value) {
      state.testValue = value;
    },

    setAccessToken(state, value) {
      state.accessToken = value;
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
          // console.log('Response');
          // console.log(response);

          API.getUserDetails(response.data.accessToken).then(
            userDetailsResponse => {
              context.commit('setLoggedIn', true);
              context.commit('setWrongPassword', false);
              context.commit('setAccessToken', response.data.accessToken);

              console.log("userDetailsResponse");
              console.log(userDetailsResponse);
            }
          ).catch(userDetailsError => {
            console.log("userDetailsError");
            console.log(userDetailsError);
          });
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
    getLoggedIn: state => state.loggedIn,
    getAccessToken: state => state.accessToken
  }
});
