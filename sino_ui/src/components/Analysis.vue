<template>
  <div class="px-16 bg-white">
    <v-container class="px-16">
      <v-row class="text-center">
        <v-col
          ><v-select
            label="Sectors"
            :items="[
              'California',
              'Colorado',
              'Florida',
              'Georgia',
              'Texas',
              'Wyoming',
            ]"
            variant="solo"
          ></v-select
        ></v-col>
        <hr class="d-inline h-auto" />
        <v-col>Topics</v-col>
        <hr class="d-inline h-auto" />
        <v-col>Type</v-col>
      </v-row>
    </v-container>
  </div>
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

export default {
  components: {
    AnalysisPost,
  },
  data() {
    return {
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
};
</script>
