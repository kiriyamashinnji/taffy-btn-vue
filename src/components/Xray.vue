<template>
  <div class="container">
    <img
      src="../assets/omote.png"
      ref="el"
      style="max-height: 100vh"
    />
    <img
      src="../assets/ura.png"
      class="ura"
      style="max-height: 100vh"
      @click="OnClick"
    />
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

  data() {
    return {
      touchRegions: [
        {
          name: "face",
          vertices: [
            { x: 0.38102846034687, y: 0.23480635344144746 },
            { x: 0.48677824013607507, y: 0.2806978780172594 },
            { x: 0.5800868693618443, y: 0.25508400383541086 },
            { x: 0.6282963277951584, y: 0.13768708050193856 },
            { x: 0.5660905749779789, y: 0.07685412932004836 },
            { x: 0.44167906934361995, y: 0.07685412932004836 },
            { x: 0.35459101539956867, y: 0.13341810147163047 },
          ],
          voice_url:
            "http://110.40.128.2/resources/voices/05/6df7d039afa52e4be6e1249e31c0b9.mp3",
        },
        {
          name: "foot",
          vertices: [
            { x: 0.3872490356285879, y: 0.7609580189269187 },
            { x: 0.39346961091030586, y: 0.8153875015633468 },
            { x: 0.43079306260061356, y: 0.8271271938966941 },
            { x: 0.45723050754791483, y: 0.8698169841997748 },
            { x: 0.556759712055402, y: 0.8943636136240464 },
            { x: 0.5956383075661392, y: 0.9391878934422813 },
            { x: 0.6796160738693314, y: 0.9498603410180514 },
            { x: 0.7138292379187802, y: 0.9210447325634719 },
            { x: 0.674950642408043, y: 0.8751532079876599 },
            { x: 0.617410321052152, y: 0.8004460749572685 },
            { x: 0.5520942805941136, y: 0.7812356693208822 },
            { x: 0.4618959390092033, y: 0.7812356693208822 },
            { x: 0.39502475473073534, y: 0.7598907741693417 },
          ],
          voice_url:
            "http://110.40.128.2/resources/voices/e4/36416d140ef94f4d6a9f8083d41415.mp3",
        },
      ],
    };
  },

  methods: {
    OnClick() {
      const px = this.elementX / this.width;
      const py = this.elementY / this.height;
      console.log(`{x:${px}, y:${py}}`);
      const region = this.touchRegions.find((r) => {
        // if px py is inside the polygon
        if (this.pointInPolygon(px, py, r.vertices)) {
          return r;
        }
      });
      if (region) {
        let audio = new Audio(region.voice_url);
        audio.play();
      }
    },

    pointInPolygon(px, py, vertices) {
      let i,
        j,
        c = false;
      for (i = 0, j = vertices.length - 1; i < vertices.length; j = i++) {
        if (
          vertices[i].y > py != vertices[j].y > py &&
          px <
            ((vertices[j].x - vertices[i].x) * (py - vertices[i].y)) /
              (vertices[j].y - vertices[i].y) +
              vertices[i].x
        ) {
          c = !c;
        }
      }
      return c;
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
      return `${(this.elementX / this.width) * 100}%`;
    },
    cursorYPosition() {
      return `${(this.elementY / this.height) * 100}%`;
    },
  },
};
</script>

<style scoped >
.container {
  display: flex;
  justify-content: center;
}

.ura {
  position: absolute;
  clip-path: circle(8rem at v-bind(cursorXPosition) v-bind(cursorYPosition));
}
</style>