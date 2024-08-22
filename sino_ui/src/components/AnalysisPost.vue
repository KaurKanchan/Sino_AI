<template>
  <div class="text-start">
    <h3 class="mb-2 font-pt-serif">{{ subject }}</h3>
    <v-img
      aspect-ratio="16/9"
      :src="subimg"
      width="430px"
      height="275px"
      cover
      class="mb-10"
    ></v-img>
    <div class="px-md-6">
      <div class="mb-16">
        <h3 class="mb-4">{{ analysis1 }}</h3>
        <p class="font-pt-serif text-truncate">{{ desc1 }}</p>
      </div>
      <div class="mb-16">
        <h3 class="mb-4">{{ analysis2 }}</h3>
        <p class="font-pt-serif text-truncate">{{ desc2 }}</p>
      </div>
      <div class="mb-16">
        <h3 class="mb-4">{{ analysis3 }}</h3>
        <p class="font-pt-serif text-truncate">{{ desc3 }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    subject: {
      type: String,
      required: true,
    },
    subimg: {
      type: String,
      required: true,
    },
    analysis1: {
      type: String,
      required: true,
    },
    desc1: {
      type: String,
      required: true,
    },
    analysis2: {
      type: String,
      required: true,
    },
    desc2: {
      type: String,
      required: true,
    },
    analysis3: {
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
