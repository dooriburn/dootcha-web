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
      <v-toolbar-title class="display-2" >DOOTCHA</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon medium>account_circle</v-icon>
      </v-btn>
    </v-toolbar>

    <v-layout row pb-2>
      <v-flex xs8 offset-xs2>
        <v-card class="card--flex-toolbar">
          <v-toolbar card prominent>
            <v-toolbar-title class="body-2 grey--text">Title</v-toolbar-title>
            <v-layout >
              <v-text-field
                label="Solo"
                placeholder="Placeholder"
                solo
                background-color="rgba(0,0,0,0)"
                flat="false"
              ></v-text-field>
            </v-layout>
            

            <v-spacer></v-spacer>

            <v-btn icon>
              <v-icon>search</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>apps</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>more_vert</v-icon>
            </v-btn>
          </v-toolbar>

          <v-divider></v-divider>
        </v-card>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
export default {

}
</script>

<style>
  .card--flex-toolbar {
    margin-top: -64px;
  }
</style>