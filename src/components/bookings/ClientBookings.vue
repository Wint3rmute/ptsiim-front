<template>
  <div>
    <router-link to="/about">
      <v-btn color="primary" elevation="2">Book visit now</v-btn>
    </router-link>
    <v-card>
      <v-toolbar>
        <v-toolbar-title> My bookings </v-toolbar-title>
      </v-toolbar>
        <v-list two-line>
          <div v-for="item in clientBookings" v-bind:key="item.booking_id">
            <v-list-item-group v-model="selected">
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title
                    v-text="item.date + ' ' + item.time"
                  ></v-list-item-title>
                  <v-list-item-subtitle
                    v-text="item.doctor.firstname + ' ' + item.doctor.lastname"
                  ></v-list-item-subtitle>
                </v-list-item-content>
                <v-icon v-on:click="deleteUserBooking(item.booking_id)">mdi-delete</v-icon>
              </v-list-item>
            </v-list-item-group>
          </div>
        </v-list>
    </v-card>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import API from "@/api/api.ts";
import Store from "@/store/index.ts";

@Component
export default class ClientBookings extends Vue {
  clientBookings = [];

  // refreshUserBookings() {
  //   API.getUserBookings(this.$store.getters.getUserData.accessToken).then(
  //     (response) => {
  //       console.log(response);
  //       this.clientBookings = response.data;
  //     }
  //   );
  // }

  mounted() {
    API.getUserBookings(this.$store.getters.getUserData.accessToken).then(
      (response) => {
        console.log(response);
        this.clientBookings = response.data;
      }
    );
  }

  deleteUserBooking(bookingId: number) {
    API.deleteUserBooking(
      this.$store.getters.getUserData.accessToken,
      bookingId
    ).then((response) => {
      console.log(response);
      this.$forceUpdate();
    });
  }
}
</script>
