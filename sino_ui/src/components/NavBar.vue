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
        <v-col cols="12" md="8" class="text-end">
          <router-link
            v-for="(link, index) in menu"
            :key="index"
            :to="link.url"
            class="mx-3 text-h5 font-weight-medium text-decoration-none text-white text-uppercase font-quicksand"
          >
            {{ link.label }}
          </router-link>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  name: "Navbar",

  data() {
    return {
      menu: [
        { label: "Home", url: "/" },
        { label: "About", url: "/about" },
        { label: "Database", url: "/database" },
        { label: "Insights", url: "/insights" },
        { label: "Subscribe", url: "/subscribe" },
      ],
    };
  },
};
</script>
