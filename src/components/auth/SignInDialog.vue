<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn text v-bind="attrs" v-on="on">Sign in</v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">User Profile</span>
      </v-card-title>
      <v-alert v-if="$store.getters.getWrongPassword" type="error">Błędne dane logowania!</v-alert>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field v-model="username" label="Username" required></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field v-model="password" label="Password" type="password" required></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="red darken-1" text @click="dialog = false">Close</v-btn>
        <v-btn color="primary darken-1" text @click="signIn">Sign In</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import API from "@/api/api.ts";

@Component
export default class SignInDialog extends Vue {
  dialog = false;
  username = "";
  password = "";

  signIn() {
    this.$store.dispatch("signIn", {
      username: this.username,
      password: this.password
    });
  }
}
</script>
