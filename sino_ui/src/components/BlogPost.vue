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
  },
};
</script>
