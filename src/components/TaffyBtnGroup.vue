<template>
    <TaffyBtn v-for="btn in btns.button_list" :key="btn" :btn="btn" />
</template>

<script>
import TaffyBtn from "./TaffyBtn.vue";

export default {
  name: "TaffyBtnGroup",
  components: {
    TaffyBtn,
  },
  props: {
    btns: Object,
  },
  data: () => {
    return {};
  },
};
</script>
