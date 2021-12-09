<template>
  <div class="container">
      <img src="../assets/omote.png" ref="el" style="position:absolute;max-height:80vh;"/>
      <img src="../assets/ura.png" class="ura" style="max-height:80vh;" @click="OnClick"/>

  </div>
</template>

<script>
import { ref } from "vue";
import { useElementBounding } from "@vueuse/core";
import { useMouse } from "@vueuse/core";

export default {
  setup() {
    const el = ref(null);
    const { top, right, bottom, left, width, height } = useElementBounding(el);
    const { x, y } = useMouse();

    return {
      el,
      x,
      y,
      top,
      right,
      bottom,
      left,
      width,
      height,
    };
  },
  methods: {
    OnClick() {
      console.log(this.elementX/this.width, this.elementY/this.height);
    },
  },
  computed: {
    elementX() {
      return this.x - this.left;
    },
    elementY() {
      return this.y - this.top;
    },
    inElement() {
      return (
        this.elementX > 0 &&
        this.elementX < this.width &&
        this.elementY > 0 &&
        this.elementY < this.height
      );
    },
    cursorXPosition() {
      return `${this.elementX/this.width*100}%`;
    },
    cursorYPosition() {
      return `${this.elementY/this.height*100}%`;
    }
  },
};
</script>

<style scoped >
.container {
  position: relative;
  display: flex;
}

.ura {
  position: absolute;
  clip-path: circle(4rem at v-bind(cursorXPosition) v-bind(cursorYPosition));
}

</style>