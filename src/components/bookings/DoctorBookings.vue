<template>
  <v-row>
    <v-col>
      <v-spacer>
        <v-toolbar-title>My schedule</v-toolbar-title>
      </v-spacer>
      <v-sheet height="400">
        <v-calendar
          ref="calendar"
          :now="today"
          :value="today"
          :attributes="getDoctorBookings"
          color="primary"
          type="week"
        ></v-calendar>
      </v-sheet>
    </v-col>
  </v-row>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import API from "@/api/api.ts";
import Store from "@/store/index.ts";

@Component
export default class DoctorBookings extends Vue {
  doctorBookings = [];

  mounted() {
    API.getUserBookings(this.$store.getters.getUserData.accessToken).then(
      (response) => {
        console.log(response);
        this.doctorBookings = response.data;
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

  // computed: {
  //     getDoctorBookings(){
  //         return this.doctorBookings.map(booking = > ({
  //             key: `booking.${booking.booking_id}`,
  //             dates: booking.date,
  //         }));
  //     },
  // }
}
</script>
