<template>
  <v-app-bar
    height="auto"
    class="py-12 px-16 text-white position-relative bg-theme-primary"
    elevation="0"
  >
    <v-container class="px-16">
      <v-row no-gutters class="align-center">
        <v-col cols="12" md="4">
          <v-img
            src="./../assets/sinoAI.png"
            :width="140"
            :height="192"
          ></v-img>
        </v-col>
        <v-col cols="12" md="8">
          <div
            class="text-end text-h5 text-uppercase font-weight-medium font-quicksand"
          >
            <a href="/" class="text-white text-decoration-none pa-3">Home</a>
            <a href="#" class="text-white text-decoration-none pa-3">About</a>
            <a href="/database" class="text-white text-decoration-none pa-3"
              >Database</a
            >
            <a href="#" class="text-white text-decoration-none pa-3"
              >Insights
            </a>
            <a href="/subscribe" class="text-white text-decoration-none pa-3"
              >Subscribe
            </a>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>
