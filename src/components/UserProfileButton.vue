<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn text v-bind="attrs" v-on="on">USER</v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">User profile details</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6" md="6">
              <v-text-field
                label="First name"
                v-model="$store.getters.getUserData.firstName"
                disabled
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6">
              <v-text-field
                label="Last name"
                required
                v-model="$store.getters.getUserData.lastName"
                disabled
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="6" md="6">
              <v-text-field
                label="Email"
                required
                v-model="$store.getters.getUserData.email"
                disabled
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6">
              <v-text-field
                label="Username"
                required
                v-model="$store.getters.getUserData.username"
                disabled
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-autocomplete
                :items="['Client', 'Doctor']"
                v-model="
                  BACKEND_ROLE_NAME_TO_FORM_ROLE_NAME[
                    $store.getters.getUserData.userRoles[0].name
                  ]
                "
                disabled
                label="User role"
              ></v-autocomplete>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="dialog = false">Hide</v-btn>
        <v-btn color="red darken-1" text @click="logOut">Log out</v-btn>
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
  BACKEND_ROLE_NAME_TO_FORM_ROLE_NAME = {
    ROLE_CLIENT: "Client",
    ROLE_DOCTOR: "Doctor",
  };

  dialog = false;

  logOut() {
    localStorage.clear();
    window.location.reload(true);
  }
}
</script>
