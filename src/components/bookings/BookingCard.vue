<template>
  <v-col sm="6">
    <v-card max-width="475" class="mx-auto">
      <v-img :src="require('@/assets/doctoricon.png')" height="200px" dark>
        <v-row class="fill-height">
          <v-spacer></v-spacer>
        </v-row>
      </v-img>

      <v-list two-line>
        <v-list-item>
          <v-list-item-icon>
            <v-icon color="indigo"> mdi-calendar </v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ booking.date }}</v-list-item-title>
            <v-list-item-subtitle>Booking date</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-action>
            <v-icon color="indigo"> mdi-clock </v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>{{ booking.time }}</v-list-item-title>
            <v-list-item-subtitle>Booking time</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item>
          <v-list-item-icon>
            <v-icon color="secondary"> mdi-account </v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title
              >{{ booking.doctor.firstname }}
              {{ booking.doctor.lastname }}</v-list-item-title
            >
            <v-list-item-subtitle>Doctor</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-icon>
            <v-icon color="secondary"> mdi-email </v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ booking.doctor.email }}</v-list-item-title>
            <v-list-item-subtitle>Contact</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item>
          <v-list-item-icon>
            <v-icon color="primary"> mdi-map-marker </v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Szczytnicka 11</v-list-item-title>
            <v-list-item-subtitle>Wrocław</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item v-on:click="displayDeleteBookingDialog()">
          <v-list-item-icon>
            <v-icon color="red"> mdi-delete </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Cancel booking</v-list-item-title>
            <v-list-item-subtitle>Cancel booking</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    <DeleteABookingConfirmation
      :dialog="showDeleteBookingDialog"
      @delete-reservation="$emit('delete-booking', booking.booking_id)"
    />
    </v-card>
  </v-col>
</template>
<script>
import { Component, Vue, Prop } from "vue-property-decorator";
import DeleteABookingConfirmation from "./DeleteABookingConfirmation.vue";

@Component({
    components: {
        DeleteABookingConfirmation,
    },
})
export default class BookingCard extends Vue {
  @Prop() booking;

  showDeleteBookingDialog = false;

  displayDeleteBookingDialog() {
      this.showDeleteBookingDialog = true;
  }
}
</script>
