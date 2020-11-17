<template>
  <v-container>
    <h1>New reservation</h1>

    <section>
      <h3>Choose a doctor</h3>
      <!-- <v-card class="mx-auto" max-width="300" tile> -->
      <v-list shaped>
        <!-- <v-subheader>Wybierz lekarza</v-subheader> -->
        <v-list-item-group v-model="selectedItem" color="primary">
          <v-list-item v-for="doctor in availableDoctors" :key="doctor.id">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title
                v-text="doctor.firstname + ' ' + doctor.lastname"
              ></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </section>
    <section>
      <h3>Pick a date</h3>
      <div>
        <!-- <v-sheet tile height="54" class="d-flex">
        <v-btn icon class="ma-2" @click="$refs.calendar.prev()">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
        <v-btn icon class="ma-2" @click="$refs.calendar.next()">
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </v-sheet> -->
        <v-sheet height="600">
          <v-calendar
            ref="calendar"
            v-model="value"
            :now="value"
            color="primary"
            :event-overlap-threshold="30"
            @click:date="clickOnCalendarDay"
          ></v-calendar>
        </v-sheet>
      </div>
    </section>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import API from "@/api/api.ts";

interface ReservationDoctorData {
  id: number;
  firstname: string;
  lastname: string;
}

@Component
export default class About extends Vue {
  availableDoctors: ReservationDoctorData[] = [];
  selectedItem = 0;
  value = new Date().toISOString().split("T")[0];

  mounted() {
    API.getAllUsers(this.$store.getters.getUserData.accessToken).then(
      (response) => {
        console.log(response);

        this.availableDoctors = response.data;
      }
    );
  }

  clickOnCalendarDay(day: any) {
    const doctorID: number = this.availableDoctors[this.selectedItem].id;

    API.getAvailableHours(
      this.$store.getters.getUserData.accessToken,
      doctorID,
      day.date
    ).then((r) => {
      console.log(r);
    });
  }
}
</script>
<style scoped>
h3 {
  margin-bottom: 15px !important;
}
</style>
