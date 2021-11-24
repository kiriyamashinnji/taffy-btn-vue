<template>
  <div>
    <img
      src="../assets/heart.svg"
      class="expanded-leaf"
      :class="[isFolded, 'l-'+btnIndex]"
      @click="toggle"
    />
    <img
      :src="getImgUrl(srcs[index % srcs.length])"
      :class="[isFolded, 'l-'+btnIndex]"
      class="leaf-content"

      @click="toggle"
    />

    <div class="leaf-description" :class="[isFolded, 'l-'+btnIndex]" @click="toggle">
      {{ texts[index % srcs.length] }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: 0,
    };
  },
  props: {
    isFolded: String,
    texts: Array,
    srcs: Array,
    btnIndex: Number,
  },
  methods: {
    getImgUrl(src) {
      return require("../assets/" + src);
    },
    toggle() {
      this.index += 1;
      this.index %= this.texts.length;
      this.$emit("toggle", [this.btnIndex, this.index]);
    },
  },
};
</script>