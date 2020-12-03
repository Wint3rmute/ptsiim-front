<template>
  <v-row>
    <v-col>
      <v-spacer>
        <v-toolbar-title>My schedule</v-toolbar-title>
      </v-spacer>
      <v-sheet height="400">
        <v-calendar
          ref="calendar"
          color="primary"
          type="week"
          :events="fake_events"
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
  fake_events = [];

  mounted() {
    API.getUserBookings(this.$store.getters.getUserData.accessToken).then(
      (response) => {
        // console.log(response);
        this.doctorBookings = response.data;
        for (const booking of this.doctorBookings) {
          console.log(booking);

          const newEvent: any = {
            name: booking.client.firstname,
            start: `${booking.date} ${booking.time}`,
          };

          this.fake_events.push(newEvent);
        }
      }
    );

    this.$refs.calendar.scrollToTime("07:30");
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
