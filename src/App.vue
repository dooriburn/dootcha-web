<template>
  <v-card flat>
    <v-toolbar
      v-if="isAuth"
      color="#FB0B5C"
      dark
      extended
      flat
      height="100px"
    >
      <v-toolbar-side-icon v-if="isAuth"></v-toolbar-side-icon>
      <v-spacer></v-spacer>
      <v-toolbar-title class="display-2">
        <button onclick="location.href='/'">
          DOOTCHA
        </button>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon
      v-if="isAuth"
      to="/user"
      >
        <v-icon medium>account_circle</v-icon>
      </v-btn>
      
    </v-toolbar>

    <v-toolbar
      v-else
      color="#FB0B5C"
      dark
      extended
      flat
      fill-height
      align-center
      height="50px"
    >
      <v-layout row class="pt-5">
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
          <v-layout justify-center>
            <v-toolbar-title class="display-2">
              <button onclick="location.href='/'">
                DOOTCHA
              </button>
            </v-toolbar-title>
          </v-layout>
          <v-layout justify-end="">
            
              <v-btn
                outline
                color="white"
                dark
                to="/login"
              >
              Login
              </v-btn>
              <v-btn
              outline
              color="white"
              dark
              to="/join"
              >
              Sign Up
              </v-btn>
              
          </v-layout>
        
      </v-layout>
      </v-toolbar>
    <router-view></router-view>
  </v-card>
</template>

<script>
export default {
computed : {
  isAuth() {
    console.log(window.location.pathname)
    var currentPath = window.location.pathname; 
    if (currentPath == '/join' || currentPath == '/login') {
      console.log("으이잉")
      return false
    }
    else {
      console.log("우아아앙")
      return true
    }
  }
},
methods : {
  setHeight() {
    console.log(this.$route.query.page)
  }
},
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