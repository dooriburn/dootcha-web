<template>
    <v-layout justify-center>
      <!-- <template>
        <v-layout class="card--flex-toolbar" align-center justify-center fill-height> -->
            <!-- <v-flex xs8 offset-x2>  -->
              
            <!-- </v-flex> -->
        <!-- </v-layout>
      </template> -->
    <v-flex xs12 sm6>
      <v-layout style="margin-top: -25px">
        <v-flex>
          <v-text-field
            placeholder="당신이 검색하고 싶은 🎥영화/감독/배우를 입력하세요."
            solo
            background-color="primary"
            append-icon="search"
          ></v-text-field>      
        </v-flex>
      </v-layout>
      
      <v-card>
        <v-container
          fluid
          grid-list-md
        >
          <v-layout row wrap>
            <v-flex
              v-for="card in cards"
              :key="card.title"
              v-bind="{ [`xs${card.flex}`]: true }"
            >
              <v-card>
                  <v-img
                    :src="card.src"
                    height="200px"
                    @click="clicked"
                  >
                    <v-container
                      fill-height
                      fluid
                      pa-2
                      > 
                      <v-layout fill-height>
                        <v-flex xs5 align-center flexbox>
                          <v-sheet class="pa-2 primary">
                            <div align="center">
                              <strong>예상 별점</strong> ⭐️ 2.8 점
                            </div>
                              
                            
                          </v-sheet>
                          <!-- <span class="headline white--text" v-text="card.title"></span> -->
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-img>

                <v-card-actions>
                  <v-list three-line>
                    <v-list-tile>
                      <v-list-tile-content>
                        <v-list-tile-title>hihi</v-list-tile-title>
                        <v-list-tile-sub-title>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </v-list-tile-sub-title>
                      </v-list-tile-content>
                      <v-list-tile-action>
                        <v-btn icon>
                          <v-icon>bookmark_border</v-icon>
                        </v-btn>
                      </v-list-tile-action>
                    </v-list-tile>
                  </v-list>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>

</template>

<script>
  export default {
    methods: {
      clicked () {
        console.log("clicked!")
      }
    },
    data: () => ({
      cards: [
        { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 6 },
        { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 6 },
        { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
        { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 }
      ]
    })
  }
</script>

<style>

</style>
