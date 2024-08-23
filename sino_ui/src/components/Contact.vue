<template>
  <!-- hero section -->
  <div class="bg-theme-primary">
    <v-container class="py-16">
      <v-row no-gutters class="justify-center text-center align-center">
        <v-col md="8">
          <h1 class="fs-30 mb-12 font-pt-serif">Contact Us</h1>
          <p class="text-h6 font-open-sans font-weight-medium">
            For inquiries about China’s AI policy landscape, questions about our
            articles, or feedback on our work, please fill out the contact form
            below. We’ll respond as soon as possible!
          </p>
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
                Enter your inquiries here:
              </div>
              <v-textarea
                class="input-form"
                variant="outlined"
                base-color="#CBD2E0"
                bg-color="white"
              ></v-textarea
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
                Submit
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
  name: "Contact",
};
</script>
