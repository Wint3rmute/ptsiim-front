import Vue from 'vue';
import Vuex from 'vuex';
import API from '@/api/api.ts';

Vue.use(Vuex);

interface UserData {
  username: string;
  email: string;
  userRoles: string[];
  accessToken: string;
  firstName: string;
  lastName: string;
}

export default new Vuex.Store({
  state: {
    loggedIn: false,
    wrongPassword: false,
    userData: {} as UserData,
  },
  mutations: {

    setLoggedIn(state, value) {
      state.loggedIn = value;
    },

    setUserData(state, userData: UserData) {
      state.userData = userData;
    },

    setWrongPassword(state, value) {
      state.wrongPassword = value;
    },

  },
  actions: {
    async signIn(context, loginData) {
      console.log(`logging in with u: ${loginData.username} and p: ${loginData.password}`);

      /**
       * First, sign in with the provided data
       */
      const signInResponse = await API.signIn(loginData.username, loginData.password);

      if (signInResponse.status !== 200) {
        context.commit('setWrongPassword', true);
        context.commit('setLoggedIn', false);
        return;
      }

      /**
       * After successful sign in, download the user's details
       */
      const userDataResponse = await API.getUserDetails(signInResponse.data.accessToken);

      if (userDataResponse.status !== 200) {
        // TODO: HANDLE. Should never happen
        alert("This should've never happened. WTF");
        return;
      }

      /**
       * If we are signed AND we have the user data - we can commit
       * the mutations setting the login state and user info
       */
      context.commit('setLoggedIn', true);
      context.commit('setWrongPassword', false);
      // context.commit('setAccessToken', signInResponse.data.accessToken);

      console.log(userDataResponse.data.roles);

      context.commit('setUserData', {
        username: loginData.username,
        email: userDataResponse.data.email,
        userRoles: userDataResponse.data.roles,
        accessToken: signInResponse.data.accessToken,
        firstName: userDataResponse.data.firstname,
        lastName: userDataResponse.data.lastname
      });

      console.log(signInResponse);
      console.log(userDataResponse);
    }
  },
  modules: {
  },

  getters: {
    getWrongPassword: state => state.wrongPassword,
    getLoggedIn: state => state.loggedIn,
    getUserData: state => state.userData,
    // getAccessToken: state => state.accessToken
  }
});
