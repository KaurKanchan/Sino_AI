<template>
  <div>
    <p class="text-start mx-md-6 text-h6 font-open-sans font-weight-bold">
      {{ category }}
    </p>
    <hr class="border-b-0" />
    <hr height="50px" class="d-inline" />
    <div class="mx-md-4 text-start">
      <v-img
        aspect-ratio="16/9"
        width="430px"
        height="275px"
        class="mb-5"
        cover
        :src="img"
      ></v-img>
      <h4>{{ doc1 }}</h4>
      <p class="text-truncate">{{ desc1 }}</p>
      <hr class="my-3" />
      <h4>{{ doc2 }}</h4>
      <p class="text-truncate">{{ desc2 }}</p>
      <hr class="my-3" />
      <h4>{{ doc3 }}</h4>
      <p class="text-truncate">{{ desc3 }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    category: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    doc1: {
      type: String,
      required: true,
    },
    desc1: {
      type: String,
      required: true,
    },
    doc2: {
      type: String,
      required: true,
    },
    desc2: {
      type: String,
      required: true,
    },
    doc3: {
      type: String,
      required: true,
    },
    desc3: {
      type: String,
      required: true,
    },
  },
};
</script>
