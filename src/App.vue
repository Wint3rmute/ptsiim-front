<template>
  <v-app>

    <NavBar/>
    navbar?
    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import NavBar from "./components/NavBar.vue";
// import HelloWorld from "./components/HelloWorld.vue";

export default Vue.extend({
  name: "App",

  components: {
    NavBar,
  },

  data: () => ({
    //
  }),
});
</script>
