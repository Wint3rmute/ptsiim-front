<template>
  <div>
    <section>
      <router-link to="/about">
        <v-btn large color="primary" elevation="2">Book a visit now</v-btn>
      </router-link>
    </section>
    <br>
    <section>
      <h1 class="v-heading text-h3">Your bookings</h1>
      <v-row>
        <BookingCard
          v-for="booking in clientBookings"
          v-bind:key="booking.booking_id"
          :booking="booking"
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
