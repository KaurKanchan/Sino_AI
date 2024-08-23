<template>
  <!-- hero section -->
  <div class="bg-theme-primary">
    <v-container class="py-16">
      <v-row no-gutters class="justify-center text-center align-center">
        <v-col md="7">
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
        <v-col md="4" cols="12" class="ps-md-16 mb-6">
          <BlogPost
            category="Government"
            img="https://etimg.etb2bimg.com/thumb/msid-106291853,imgsize-62380,width-1200,height=765,overlay-etgovernment/blog/10-govtech-trends-for-2024-major-futuristic-tech-trends-to-watch-in-government-sector-in-2024.jpg"
          />
          <v-list-item
            v-for="(item, index) in govtItems"
            :key="index"
            class="text-start"
          >
            <h4>{{ item.title }}</h4>
            <p class="text-truncate">{{ item.description }}</p>
            <hr class="my-3" />
          </v-list-item>
        </v-col>
        <v-col md="4" cols="12" class="ps-md-16 mb-6">
          <BlogPost
            category="Market"
            img="https://img.freepik.com/free-vector/market-growth-concept-business-progress-business-expansion-idea-company-promotion-new-marketplace-finance-increase-business-success-flat-vector-illustration_613284-1292.jpg"
          />
          <v-list-item
            v-for="(item, index) in marketItems"
            :key="index"
            class="text-start"
          >
            <h4>{{ item.title }}</h4>
            <p class="text-truncate">{{ item.description }}</p>
            <hr class="my-3" />
          </v-list-item>
        </v-col>
        <v-col md="4" cols="12" class="ps-md-16 mb-6">
          <BlogPost
            category="Private"
            img="https://t4.ftcdn.net/jpg/00/94/42/23/360_F_94422350_NLHh8XUVbSQn2GhMOxcgPinKNJKeB4JO.jpg"
          />
          <v-list-item
            v-for="(item, index) in pvtItems"
            :key="index"
            class="text-start"
          >
            <h4>{{ item.title }}</h4>
            <p class="text-truncate">{{ item.description }}</p>
            <hr class="my-3" />
          </v-list-item>
        </v-col>
      </v-row>
    </v-container>
  </div>
  <!-- /database section -->
</template>

<script>
import BlogPost from "./BlogPost.vue";
import axios from "axios";

export default {
  components: {
    BlogPost,
  },
  data() {
    return {
      items: [], // The full items array from API
      marketItems: [],
      govtItems: [],
      pvtItems: [],
      loading: false,
      error: null,
      blogPosts: [
        {
          category: "Government",
          img: "https://etimg.etb2bimg.com/thumb/msid-106291853,imgsize-62380,width-1200,height=765,overlay-etgovernment/blog/10-govtech-trends-for-2024-major-futuristic-tech-trends-to-watch-in-government-sector-in-2024.jpg",
        },
        {
          category: "Market",
          img: "https://img.freepik.com/free-vector/market-growth-concept-business-progress-business-expansion-idea-company-promotion-new-marketplace-finance-increase-business-success-flat-vector-illustration_613284-1292.jpg",
        },
        {
          category: "Private sector",
          img: "https://t4.ftcdn.net/jpg/00/94/42/23/360_F_94422350_NLHh8XUVbSQn2GhMOxcgPinKNJKeB4JO.jpg",
        },
      ],
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      this.loading = true;
      this.error = null;
      try {
        const response = await axios.get("http://localhost:5000/blogPosts");
        this.items = response.data;
        if (this.items.results) {
          this.marketItems = this.items.results
            .filter((item) => item.category === "Market")
            .slice(0, 3);

          this.govtItems = this.items.results
            .filter((item) => item.category === "Government")
            .slice(0, 3);

          this.pvtItems = this.items.results
            .filter((item) => item.category === "Private")
            .slice(0, 3);
        } else {
          this.error = "No results found.";
        }
      } catch (err) {
        console.error(err);
        this.error = "Failed to load data.";
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
