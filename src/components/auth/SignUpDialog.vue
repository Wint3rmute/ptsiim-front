<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn text v-bind="attrs" v-on="on">Sign up</v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">User Profile</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6" md="6">
              <v-text-field v-model="form.firstname" label="Legal first name" required></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6">
              <v-text-field v-model="form.lastname" label="Legal last name" required></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="6" md="6">
              <v-text-field v-model="form.email" label="Email" required></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6">
              <v-text-field v-model="form.username" label="Username" required></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field v-model="form.password" label="Password" type="password" required></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-autocomplete v-model="form.role" :items="['Client', 'Doctor']" label="User role"></v-autocomplete>
            </v-col>
          </v-row>
        </v-container>
        <small>*indicates required field</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="red darken-1" text @click="dialog = false">Cancel</v-btn>
        <v-btn color="primary darken-1" text @click="signUp">Sign Up</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import API from "@/api/api.ts";

@Component
export default class SignUpDialog extends Vue {
  dialog = false;

  form = {
    email: "",
    firstname: "",
    lastname: "",
    password: "",
    role: "",
    username: ""
  };

  signUp() {
    API.signUp(
      this.form.email,
      this.form.firstname,
      this.form.lastname,
      this.form.password,
      this.form.role,
      this.form.username
    )
      .then(c => {
        console.log(c);
      })
      .catch(e => {
        console.log(e);
      });

    this.dialog = false;
  }
}
</script>
