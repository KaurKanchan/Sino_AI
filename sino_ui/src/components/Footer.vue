<template>
  <v-footer class="pa-md-16 py-16 bg-theme-primary">
    <v-row class="d-flex align-center px-md-16">
      <v-col cols="12" md="2" style="text-align: -webkit-center">
        <router-link to="/">
          <v-img
            src="./../assets/sinoAI.png"
            :width="140"
            :height="192"
          ></v-img> </router-link
      ></v-col>
      <v-col cols="12" md="4" class="text-center text-md-start">
        <span>
          SinoAI Advisory<br />51 East 14th Street<br />Chicago, IL 60605<br
        /></span>
        <v-icon class="me-1 pb-1" icon="mdi-email" size="18"></v-icon>
        inquiry@sinoaiadvisory.com
      </v-col>
      <v-col cols="12" md="6">
        <v-row
          no-gutters
          class="justify-lg-space-around text-center flex-column ga-3 flex-lg-row ga-lg-0"
        >
          <router-link
            v-for="(link, index) in menu"
            :key="index"
            :to="link.url"
            class="mx-2 text-h5 font-weight-medium text-decoration-none text-white text-uppercase font-quicksand"
          >
            {{ link.label }}
          </router-link>
        </v-row></v-col
      >

      <v-col cols="12" class="mt-6 text-caption font-open-sans">
        @{{ new Date().getFullYear() }} —
        <span
          >SinoAI Advisory. All rights reserved.
          <router-link to="/privacypolicy" class="text-white"
            >Privacy Policy</router-link
          >
          and
          <router-link to="/termsofuse" class="text-white"
            >Terms of Use</router-link
          >.</span
        >
      </v-col>
    </v-row>
  </v-footer>
</template>
<script>
export default {
  name: "FooterComponent",

  data() {
    return {
      menu: [
        { label: "About", url: "/about" },
        { label: "Subscribe", url: "/subscribe" },
        { label: "Contact Us", url: "/contact" },
      ],
    };
  },
};
</script>
