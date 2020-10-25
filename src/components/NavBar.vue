<template>
  <v-app-bar app color="secondary" dark>
    <div class="d-flex align-center">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        :src="require('../assets/w4_med_icon.png')"
        width="45"
      />

      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        :src="require('../assets/w4_med_text.png')"
        width="200"
      />
    </div>

    <v-spacer></v-spacer>

    <SignInDialog v-if="!$store.getters.getLoggedIn" />
    <SignUpDialog v-if="!$store.getters.getLoggedIn" />

    <UserProfileButton v-if="$store.getters.getLoggedIn" />
  </v-app-bar>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SignUpDialog from "./auth/SignUpDialog.vue";
import SignInDialog from "./auth/SignInDialog.vue";
import UserProfileButton from "./UserProfileButton.vue";

@Component({
  components: {
    SignUpDialog,
    SignInDialog,
    UserProfileButton
  }
})
export default class NavBar extends Vue {}
</script>
