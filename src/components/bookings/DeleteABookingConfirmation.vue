<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <v-card>
      <v-card-title>
        <span class="headline">Delete booking</span>
      </v-card-title>
      <v-card-text>
        <v-container>
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
          >Confirm</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { Component, Vue, Prop } from "vue-property-decorator";

@Component()
export default class DeleteABookingConfirmation extends Vue {
  @Prop({ default: false }) dialog;

  displayProgressBar = false;

  confirmBooking() {
    this.displayProgressBar = true;
    this.$emit("delete-reservation");
  }
}
</script>
