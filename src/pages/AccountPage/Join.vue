<template>
  <div id="app">
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout  justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-card-text>
                <v-form>
                  <v-text-field color="#FB0B5C" prepend-icon="person" name="login" label="아이디" type="text"></v-text-field>
                  <v-text-field color="#FB0B5C" prepend-icon="lock" name="password" label="비밀번호" id="password" type="password"></v-text-field>
                  <v-text-field color="#FB0B5C" prepend-icon="email" name="email" label="이메일" type="text"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn class="white--text" color="#FB0B5C">회원가입</v-btn>
              </v-card-actions>
            
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>
