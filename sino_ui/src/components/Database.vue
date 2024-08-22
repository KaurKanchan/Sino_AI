<template>
  <!-- hero section -->
  <div class="bg-theme-primary">
    <v-container class="py-16">
      <v-row no-gutters class="justify-center text-center align-center">
        <v-col md="6">
          <h1 class="fs-30 mb-6 font-pt-serif">
            China AI Policy Insights for Global Leaders
          </h1>
          <p class="text-h6 font-open-sans font-weight-regular">
            Comprehensive analysis and advisory on China's AI landscape
          </p>
          <v-text-field
            class="mt-10 mx-md-16"
            append-inner-icon="mdi-magnify"
            density="compact"
            placeholder="Discover China AI policies and analysis"
            variant="solo"
            bg-color="white"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </div>
  <!-- /hero section -->
  <!-- database section -->
  <div class="text-center text-black bg-light px-15">
    <v-container class="py-16">
      <h1 class="text-theme-primary mb-16 font-pt-serif">Latest Updates</h1>
      <v-row>
        <v-col
          v-for="(message, index) in blogPosts"
          :key="index"
          md="4"
          cols="12"
          class="px-md-16 mb-6"
        >
          <BlogPost
            :category="message.category"
            :img="message.img"
            :doc1="message.doc1"
            :desc1="message.desc1"
            :doc2="message.doc2"
            :desc2="message.desc2"
            :doc3="message.doc3"
            :desc3="message.desc3"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
  <!-- /database section -->
</template>

<script>
import BlogPost from "./BlogPost.vue";

export default {
  components: {
    BlogPost,
  },
  data() {
    return {
      blogPosts: [
        {
          category: "Government",
          img: "https://etimg.etb2bimg.com/thumb/msid-106291853,imgsize-62380,width-1200,height=765,overlay-etgovernment/blog/10-govtech-trends-for-2024-major-futuristic-tech-trends-to-watch-in-government-sector-in-2024.jpg",
          doc1: "Political theories and ideologies",
          desc1:
            "Provides a novel approach to the analysis of ideologies, through examining their internal conceptual morphology. ",
          doc2: "Democracy",
          desc2: "Maintaining law and order with concept of power sharing",
          doc3: "Constitution",
          desc3:
            "Collection of fundamental principles and established precedents that define how an entity, such as a nation, state, or social group, is governed",
        },
        {
          category: "Market",
          img: "https://img.freepik.com/free-vector/market-growth-concept-business-progress-business-expansion-idea-company-promotion-new-marketplace-finance-increase-business-success-flat-vector-illustration_613284-1292.jpg",
          doc1: "Consumer behavior",
          desc1:
            "The actions and decisions that people make when they are purchasing or using products",
          doc2: "Competition ",
          desc2:
            "A market with many buyers and sellers, where no one individual has the ability to affect the market",
          doc3: "Monopoly in market",
          desc3:
            "A market structure where a single company or group of companies has exclusive control over the production and distribution of a product or service",
        },
        {
          category: "Private sector",
          img: "https://t4.ftcdn.net/jpg/00/94/42/23/360_F_94422350_NLHh8XUVbSQn2GhMOxcgPinKNJKeB4JO.jpg",
          doc1: "Independent management",
          desc1:
            "The management of the private sector is entirely dependent on the actions of its owners",
          doc2: "Work culture of employees",
          desc2:
            "The private sector has high openness, high confrontation, high trust, high authenticity, high proaction, high autonomy, high collaboration and high experimentation.",
          doc3: "Profit motive",
          desc3:
            "The profit motive is the drive or incentive for individuals and businesses to maximize their financial gains.",
        },
      ],
    };
  },
};
</script>
