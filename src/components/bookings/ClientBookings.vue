<template>
  <div>
    <section>
      <router-link to="/about">
        <v-row class="justify-center">
          <v-btn large color="primary" elevation="2">Book a visit now</v-btn>
        </v-row>
      </router-link>
    </section>
    <br />
    <section>
      <h1 class="v-heading text-h3 text-center">Your bookings</h1>
      <br />
      <v-row>
        <BookingCard
          v-for="booking in clientBookings"
          v-bind:key="booking.booking_id"
          :booking="booking"
          @delete-booking="deleteUserBooking"
        />
      </v-row>
    </section>

    <v-row>
      <!-- <BookingCard /> -->
      <BookingCard />
      <BookingCard />
    </v-row>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BookingCard from "@/components/bookings/BookingCard.vue";
import API from "@/api/api.ts";
import Store from "@/store/index.ts";

@Component({
  components: {
    BookingCard,
  },
})
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
        this.clientBookings = response.data.filter(
          (booking: any, index: number, array: any) => {
            const dateToday = new Date();
            const bookingDate = new Date(`${booking.date}T00:00:00`);

            console.log(dateToday);
            console.log(bookingDate);

            return dateToday < bookingDate;
          }
        );
      }
    );
  }

  deleteUserBooking(bookingId: number) {
    console.log("Deleting booking...");
    API.deleteUserBooking(
      this.$store.getters.getUserData.accessToken,
      bookingId
    ).then((response) => {
      console.log(response);
      window.location.href = '/';
    });
  }
}
</script>
