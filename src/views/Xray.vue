<template>
  <div class="container">
    <div class="background"></div>
    <Xray> </Xray>
  </div>
</template>

<script>
import Xray from "../components/Xray.vue";

export default {
  components: {
    Xray,
  },
};
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
}

.background {
  background-image: url("https://raw.githubusercontent.com/kiriyamashinnji/taffy-btn-vue/develop/src/assets/ura.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100vw;
  z-index: -1;
  position: absolute;
  filter: blur(3px) brightness(0.95);
  transform: scale(1.2);
}
</style>