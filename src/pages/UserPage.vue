<template>
  <v-container>
    <v-layout>
      <v-flex
        xs8
        sm6
        md4
        align-center
        justify-end
        layout
        text-xs-center
      >
    <v-avatar
      class="margin-top--120"
      size= 200px
      color="grey lighten-4"
    >
      <img src="../assets/doori.jpg" alt="avatar">
      </v-avatar>
      </v-flex>

      <v-flex
        xs4
        align-center
        justify-start
        layout
        text-xs-center
        >
        <v-card 
          class="margin-top--200 margin-left--50"
          color="rgba(0,0,0,0)"
          flat
        >
          <p class="headline font-weight-black"
            style="color:white;"><storg>심두리</storg></p>
        </v-card>
        <div class="margin-top--200">
          <v-btn flat icon color="rgba(255,255,255,0.5)">
            <v-icon>settings</v-icon>
          </v-btn>
          <v-btn fab small depressed color="rgba(255,255,255,1)">
            <v-icon>person_add</v-icon>
          </v-btn>
        </div>
        
      </v-flex>

      <v-flex style="margin-top: -80px">
        <v-btn color="#32BEBE" dark
          to="/user/follow"
        >팔로워</v-btn>
        <v-btn color="#37C3C3" dark
          to="/user/follow"
        >팔로잉</v-btn>
      </v-flex>
    </v-layout>
    <router-link></router-link>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    window : {
      width : 0, 
      height: 0
    }, 
    
  }),
  created() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      // this.window.width = window.innerWidth;
      // this.window.height = window.innerHeight;
      this.avatarImageSize = window.innerWidth - 1400;
      console.log(this.avatarImageSize)
    }
  }
}
</script>

<style>
  .margin-top--120 {
    margin-top : -120px;
  }
  .margin-top--200 {
    margin-top : -200px;
  }
  .margin-left--50 {
    margin-left: 50px;
  }
</style>
