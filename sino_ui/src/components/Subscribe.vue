<template>
  <!-- hero section -->
  <div class="bg-theme-primary">
    <v-container class="py-16">
      <v-row no-gutters class="justify-center text-center align-center">
        <v-col md="8">
          <h1 class="fs-30 mb-12 font-pt-serif">
            Subscribe to SinoAI Insights
          </h1>
          <p class="text-h6 font-open-sans font-weight-medium">
            Stay updated with the latest analysis and trends in China’s AI
            policy landscape.
          </p>
          <ul class="font-weight-regular fs-18 mt-3 subscribe">
            <li class="mb-3" v-for="(item, index) in list" :key="index">
              {{ item }}
            </li>
          </ul>
        </v-col>
      </v-row>
    </v-container>
  </div>
  <!-- /hero section -->
  <!-- subscribe form -->
  <div class="bg-light">
    <v-container class="py-16">
      <v-row no-gutters class="justify-center align-center">
        <v-col md="6">
          <v-row class="gr-md-10">
            <v-col md="6" class="pe-6">
              <div
                class="text-h6 font-weight-regular text-black font-open-sans"
              >
                First Name
              </div>
              <v-text-field
                hide-details="auto"
                class="input-form"
                variant="outlined"
                base-color="#CBD2E0"
                bg-color="white"
              ></v-text-field
            ></v-col>
            <v-col md="6" class="ps-6">
              <div
                class="text-h6 font-weight-regular text-black font-open-sans"
              >
                Last Name
              </div>
              <v-text-field
                class="input-form"
                hide-details="auto"
                variant="outlined"
                bg-color="white"
                base-color="#CBD2E0"
              ></v-text-field
            ></v-col>
            <v-col md="12">
              <div
                class="text-h6 font-weight-regular text-black font-open-sans"
              >
                Email
              </div>
              <v-text-field
                class="input-form"
                hide-details="auto"
                variant="outlined"
                base-color="#CBD2E0"
                bg-color="white"
              ></v-text-field
            ></v-col>
            <v-col md="12">
              <div
                class="text-h6 font-weight-regular text-black font-open-sans"
              >
                Area of Interests (optional)
              </div>
              <v-text-field
                class="input-form"
                hide-details="auto"
                variant="outlined"
                base-color="#CBD2E0"
                bg-color="white"
              ></v-text-field
            ></v-col>
            <v-col md="12" class="text-black">
              <v-checkbox class="input-form text-h6"
                ><template v-slot:label>
                  <div class="text-h6 font-open-sans ms-3">
                    I agree to receive emails from SinoAI Advisory.
                  </div>
                </template></v-checkbox
              >
            </v-col>
            <v-col md="12" class="text-center">
              <v-btn
                rounded="0"
                color="white"
                flat
                size="x-large"
                class="px-16 text-black font-pt-serif font-weight-bold text-h6 about-btn border-t-lg"
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
