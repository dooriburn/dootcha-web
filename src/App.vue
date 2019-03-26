<template>
  <v-card flat>
    <v-toolbar
      color="#FB0B5C"
      dark
      extended
      flat
      height="100px"
    >
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-spacer></v-spacer>
      <v-toolbar-title class="display-2">
        <button onclick="location.href='/'">
          DOOTCHA
        </button>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon
      to="/user"
      >
        <v-icon medium>account_circle</v-icon>
      </v-btn>
    </v-toolbar>
    <router-view></router-view>
  </v-card>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>


<style>
  .card--flex-toolbar {
    margin-top: -30px;
  }
  
</style>