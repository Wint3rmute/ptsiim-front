<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img :src="require('../assets/w4_med_icon.png')" class="my-3" contain height="200" />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Welcome to W4 Med</h1>

        <p class="subheading font-weight-regular">
          For help and collaboration with other W4 students,
          <br />please join our online the one and only
          <a
            href="https://www.facebook.com/groups/offtopW4"
            target="_blank"
          >offtop W4</a>
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  test() {
    console.log("Test");
    this.$store.commit("setTestValue", !this.$store.getters.getTestValue);
  }
}
</script>
