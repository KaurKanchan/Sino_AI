<template>
  <v-app-bar
    height="auto"
    class="py-12 px-16 text-white position-relative bg-theme-primary"
    elevation="0"
  >
    <v-container class="px-16">
      <v-row no-gutters class="align-center">
        <v-col cols="12" md="4">
          <router-link to="/">
            <v-img
              src="./../assets/sinoAI.png"
              :width="140"
              :height="192"
            ></v-img>
          </router-link>
        </v-col>
        <v-col cols="12" md="8">
          <div
            class="text-end text-h5 text-uppercase font-weight-medium font-quicksand"
          >
            <router-link to="/" class="text-white text-decoration-none pa-3"
              >Home</router-link
            >
            <router-link to="#" class="text-white text-decoration-none pa-3"
              >About</router-link
            >
            <router-link
              to="/database"
              class="text-white text-decoration-none pa-3"
              >Database</router-link
            >
            <router-link
              to="/insights"
              class="text-white text-decoration-none pa-3"
              >Insights</router-link
            >
            <router-link
              to="/subscribe"
              class="text-white text-decoration-none pa-3"
              >Subscribe</router-link
            >
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>
