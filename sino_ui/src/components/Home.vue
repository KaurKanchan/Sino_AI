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
      <h1 class="text-theme-primary mb-16 font-pt-serif">China AI Database</h1>
      <v-row>
        <v-col md="4" cols="12" class="px-md-16 mb-6">
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
        <v-col md="4" cols="12" class="px-md-16 mb-6">
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
        <v-col md="4" cols="12" class="px-md-16 mb-6">
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
  <!-- latest analysis section -->
  <div class="bg-theme-primary-light px-16">
    <v-container class="pa-16">
      <h1 class="mb-16 text-center font-pt-serif">Latest Analysis</h1>
      <v-row class="mb-16">
        <v-col md="6" cols="12">
          <v-img src="../assets/governmental_support.jpg" class="mb-10"></v-img>
          <h3 class="mb-4">Governmental Support</h3>
          <p class="font-pt-serif">
            Government support refers to the actions and policies implemented by
            the government to assist and promote various sectors of the economy,
            such as business, innovation, environmental conservation, and
            sustainable development.
          </p>
        </v-col>
        <v-col md="1" cols="0" class="border-opacity-75 border-e-sm"> </v-col>
        <v-col
          md="5"
          cols="12"
          class="pa-md-10 v-col-12 v-col-md-4 d-flex flex-column justify-space-between"
        >
          <div class="mb-16">
            <h3 class="mb-4">Businesses & Government Support</h3>
            <p class="font-pt-serif">
              The government may help businesses by providing financial, legal,
              and other assistance. It can also be a public servant, enacting
              and enforcing consumer protection, labour safety, and other
              regulations. One of the biggest challenges facing entrepreneurs is
              access to capital.
            </p>
          </div>
          <div class="mb-16">
            <h3 class="mb-4">Agriculture & Government Support</h3>
            <p class="font-pt-serif">
              Governments can use tools like rural development practices,
              agricultural extension, economic protections, agricultural
              subsidies or price controls to change the dynamics of agricultural
              production, or improve the consumer impacts of the production.
              Agricultural policy has wide reaching primary and secondary
              effects.
            </p>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          md="4"
          cols="12"
          v-for="(post, index) in analysisPosts"
          :key="index"
        >
          <AnalysisPost
            :subimg="post.subimg"
            :subject="post.subject"
            :analysis1="post.analysis1"
            :desc1="post.desc1"
            :analysis2="post.analysis2"
            :desc2="post.desc2"
            :analysis3="post.analysis3"
            :desc3="post.desc3"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
  <!-- /latest analysis section -->
</template>

<script>
import AnalysisPost from "./AnalysisPost.vue";
import BlogPost from "./BlogPost.vue";
import axios from "axios";

export default {
  components: {
    BlogPost,
    AnalysisPost,
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
      analysisPosts: [
        {
          subject: "Money",
          subimg:
            "https://qph.cf2.quoracdn.net/main-qimg-087624e94dfedff7dc08932674357080-lq",
          analysis1: "Financial Management",
          desc1:
            "Financial management is the business function concerned with profitability, expenses, cash and credit. These are often grouped together under the rubric of maximizing the value of the firm for stockholders.",
          analysis2: "Investing",
          desc2:
            "Investment is traditionally defined as the commitment of resources to achieve later benefits. If an investment involves money, then it can be defined as a commitment of money to receive more money later",
          analysis3: "Budgeting and saving",
          desc3:
            "Financial literacy can be defined as knowledge about financial planning and management that allows making reasonable choices about money spending and saving.",
        },
        {
          subject: "Market Research",
          subimg:
            "https://www.dissertationproposal.co.uk/wp-content/uploads/2020/06/71-Research-Paper-Topics-Ideas-for-Marketing-Students.jpg",
          analysis1: "Brand manipulation",
          desc1:
            "You can analyze the effectiveness of companies' strategies to engage new consumers. You can explore global trends and approaches to brand marketing.",
          analysis2: "Artificial intelligence",
          desc2:
            "The role of artificial intelligence in improving marketing ROI. Strategies for engaging Generation Z consumers in marketing campaigns. The influence of social...",
          analysis3: "Localized marketing strategies",
          desc3:
            "The impact of strategic and tactical causes marketing on brand loyalty among customers; Best strategies for incorporating new items into the lifestyles of the ...",
        },
        {
          subject: "Growth",
          subimg:
            "https://pickystory.com/wp-content/uploads/2022/10/profit-motive-explained-1024x714.png",
          analysis1: "Cognitive development",
          desc1:
            "Cognitive development is a field of study in neuroscience and psychology focusing on a child's development in terms of information processing, conceptual resources, perceptual skill, language learning, and other aspects of the developed adult brain and cognitive psychology.",
          analysis2: "Personal development",
          desc2:
            "Personal development and personality traits, heredity is an important factor",
          analysis3: "Growth and development",
          desc3:
            "Development refers to functional or behavioral changes. Growth is biological. Development is social, emotional, cognitive, moral, and other domains of function.",
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
