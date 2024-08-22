<template>
  <!-- hero section -->
  <div class="bg-theme-primary">
    <v-container class="py-16">
      <v-row no-gutters class="justify-center text-center align-center">
        <v-col md="6">
          <h1 class="fs-30 mb-12 font-pt-serif">
            Subscribe to SinoAI Insights
          </h1>
          <p class="text-h6 font-open-sans font-weight-medium">
            Stay updated with the latest analysis and trends in China’s AI
            policy landscape.
          </p>
          <ul class="font-weight-regular fs-18">
            <li v-for="(item, index) in list" :key="index">{{ item }}</li>
          </ul>
        </v-col>
      </v-row>
    </v-container>
  </div>
  <!-- /hero section -->
  <!-- subscribe form -->
  <div class="bg-theme-primary">
    <v-container class="py-16">
      <v-row no-gutters class="justify-center text-center align-center">
        <v-col md="6">
          <v-row class="gr-md-14">
            <v-col md="6" class="pe-6"
              ><v-text-field
                hide-details="auto"
                variant="solo"
                bg-color="white"
                placeholder="First Name"
              ></v-text-field
            ></v-col>
            <v-col md="6" class="ps-6"
              ><v-text-field
                hide-details="auto"
                variant="solo"
                bg-color="white"
                placeholder="Last Name"
              ></v-text-field
            ></v-col>
            <v-col md="12"
              ><v-text-field
                hide-details="auto"
                variant="solo"
                bg-color="white"
                placeholder="Email"
              ></v-text-field
            ></v-col>
            <v-col md="12"
              ><v-text-field
                hide-details="auto"
                variant="solo"
                bg-color="white"
                placeholder="Area of Interests"
              ></v-text-field
            ></v-col>
            <v-col md="12">
              <v-checkbox
                color="white"
                label="I agree to receive emails from SinoAI Advisory."
              ></v-checkbox>
            </v-col>
            <v-col md="12">
              <v-btn
                rounded="0"
                color="white"
                size="x-large"
                class="px-16 bg-light text-black font-pt-serif font-weight-bold text-h6"
              >
                Subscribe
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
  <!-- /subscribe form -->
</template>
<script>
export default {
  name: "Subscribe",
  data() {
    return {
      list: [
        "Exclusive access to in-depth AI policy analysis",
        "Regular updates on new policy documents and market trends",
        "Insightful commentary from AI policy experts",
        "Customized reports and advisory services",
      ],
    };
  },
};
</script>
