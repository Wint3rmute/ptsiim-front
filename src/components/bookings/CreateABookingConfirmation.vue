<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn text v-bind="attrs" v-on="on">Sign in</v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">Booking confirmation</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <section>
            Create a booking to {{ doctorNameSurname }} at {{ date }},
            {{ time }}?
          </section>
          <section v-if="displayProgressBar">
            <br />
            Processing...
            <v-progress-circular
              indeterminate
              color="primary"
            ></v-progress-circular>
          </section>
        </v-container>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="red darken-1" text @click="dialog = false">Cancel</v-btn>
        <v-btn color="primary darken-1" text @click="confirmBooking()"
          >Confirm booking</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { Component, Vue, Prop } from "vue-property-decorator";

@Component()
export default class CreateABookingConfirmation extends Vue {
  @Prop({ default: false }) dialog;
  @Prop() date;
  @Prop() doctorNameSurname;
  @Prop() time;

  displayProgressBar = false;

  confirmBooking() {
    this.displayProgressBar = true;
    this.$emit("make-reservation");
  }
}
</script>
