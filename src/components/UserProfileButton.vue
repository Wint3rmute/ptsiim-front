<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn text v-bind="attrs" v-on="on">USER</v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">Tu będą dane użytkownika</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6" md="6">
              <v-text-field label="Legal first name" required></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6">
              <v-text-field label="Legal last name" required></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="6" md="6">
              <v-text-field label="Email" required></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6">
              <v-text-field label="Username" required></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field label="Password" type="password" required></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-autocomplete :items="['Client', 'Doctor']" label="User role"></v-autocomplete>
            </v-col>
          </v-row>
        </v-container>
        <small>*indicates required field</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="red darken-1" text @click="dialog = false">Cancel</v-btn>
        <v-btn color="primary darken-1" text @click="dialog = false">Sign Up</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import API from "@/api/api.ts";
import Store from "@/store/index.ts";

@Component
export default class UserProfileButton extends Vue {
  dialog = false;

  
}
</script>
