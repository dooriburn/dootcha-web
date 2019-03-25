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
    <template v-if="ok">
      <v-layout class="card--flex-toolbar" align-center justify-center fill-height>
          <v-flex xs8 offset-x2>
            <v-text-field
              placeholder="당신이 검색하고 싶은 🎥영화/감독/배우를 입력하세요."
              solo
              background-color="primary"
              append-icon="search"
            ></v-text-field>
          </v-flex>
      </v-layout>
    </template>
    <router-view></router-view>
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      ok : false
    }
  }
}
</script>


<style>
  .card--flex-toolbar {
    margin-top: -30px;
  }
  
</style>