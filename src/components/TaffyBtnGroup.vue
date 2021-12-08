<template>
  <div class="btn-group">
    <TaffyBtn 
    v-for="btn in btns.button" 
    :key="btn" 
    :btn="btn"
    :isPaused="isPaused"
    :playUrlList="playUrlList"
    @play="onPlay"/>

    <TaffyBtnUpload :category_name="btns.category_name" />
  </div>
</template>

<script>
import TaffyBtn from "./TaffyBtn.vue";
import TaffyBtnUpload from "./TaffyBtnUpload.vue";

export default {
  name: "TaffyBtnGroup",
  components: {
    TaffyBtn,
    TaffyBtnUpload
  },
  props: {
    btns: Object,
    playUrlList: Object,
    isPaused: Boolean
  },
  data: () => {
    return {};
  },
  methods: {
    onPlay: function (url) {
      this.$emit('play', url);
    }
  }
};
</script>

<style>
.btn-group {
  text-align: left;
  
}
</style>