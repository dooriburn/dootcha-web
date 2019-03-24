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
      <v-toolbar-title class="display-2">DOOTCHA</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon medium>account_circle</v-icon>
      </v-btn>
    </v-toolbar>

    <v-layout row pb-2>
      <v-flex xs8 offset-xs2>
        <v-card class="card--flex-toolbar">
          <v-toolbar card prominent>
            <v-spacer></v-spacer>
              <v-flex xs12>
                <v-text-field
                  placeholder="당신이 검색하고 싶은 영화/감독/배우를 입력하세요."
                  solo
                  background-color="rgba(0,0,0,0)"
                  flat
                ></v-text-field>
              </v-flex>
            <v-spacer></v-spacer>
            <v-icon>search</v-icon>
          </v-toolbar>
          <v-divider></v-divider>
        </v-card>
      </v-flex>
    </v-layout>
    <router-view></router-view>
  </v-card>
</template>

<script>
export default {
  
}
</script>


<style>
  .card--flex-toolbar {
    margin-top: -30px;
  }
</style>