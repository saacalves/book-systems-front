<template>
  <v-app>
    <v-app-bar app color="black" dark>
    <div id="nav">
      <router-link to="/home">CADASTRO</router-link> |
      <router-link to="/estante">ESTANTE</router-link> 
    </div>
    <router-view/>
      <v-spacer></v-spacer>
        <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text>   
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
    </v-btn>
  </v-app-bar>
  <v-main>
    <Home/>
    <router-view/>
  </v-main>
  </v-app> 
</template>

<script>
import Home from './views/Home';
//import Estante from './views/Estante';

export default {
  name: 'App',

         methods: {
            goToHome() {
                this.$router.push('/home');
            },
            goToEstante() {
                this.$router.push('/estante');
            },
        },
  components: {
    Home,
  },

  data: () => ({
    //
  }),
};

</script>
