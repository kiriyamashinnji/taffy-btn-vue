<template>
  <div class="main" :class="{ active: !sideBarToggled }">
    <TopNav></TopNav>
    <div class="divider" />

    <TaffyBtnGroup
      id="btn-group"
      :btns="btnOverview[activeId]"
      :playUrlList="playUrlList"
      :isPaused="paused"
      @play="play"
    />
    <Widgets
      @pause="pause"
      @_continue="_continue"
      @playRandom="playRandom"
      @setMode="setMode"
    />
  </div>
</template>

<script>
import TaffyBtnGroup from "./TaffyBtnGroup.vue";
import Widgets from "./Widgets.vue";
import TopNav from "./TopNav.vue";

export default {
  name: "Main",
  components: {
    TaffyBtnGroup,
    Widgets,
    TopNav,
  },
  data: () => {
    return {
      init: false,
      loop: false,
      random: false,
      overlap: false,
      paused: false,
      playList: [],
      soundList: [],
      playUrlList: [],
    };
  },

  mounted() {},

  props: {
    btnOverview: Object,
    sideBarToggled: Boolean,
    activeId: Number,
  },

  methods: {
    play: function (url) {
      if (!this.init) {
        this.init = true;
        this.btnOverview.forEach((btnGroup) => {
          btnGroup.button_list.forEach((btn) => {
            this.soundList.push(btn.voice_url);
          });
        });
      }

      if (!this.overlap) {
        this.playList.forEach((audio) => {
          audio.pause();
        });
        this.playList = [];
      }
      let audio = new Audio(url);
      audio.player = this;
      audio.onended = audioEnd;
      this.playList.push(audio);
      audio.loop = this.loop;
      audio.play();

      audio.url = url;
      this.generatePlayUrlList();
    },

    generatePlayUrlList: function () {
      this.playUrlList = [];
      for (let i = 0; i < this.playList.length; i++) {
        this.playUrlList.push(this.playList[i].url);
      }
    },

    pause: function () {
      this.playList.forEach((audio) => {
        audio.pause();
      });
      this.paused = true;
    },

    _continue: function () {
      this.playList.forEach((audio) => {
        audio.play();
      });
      this.paused = false;
    },

    setMode: function (mode, overlap) {
      if (mode === "loop") {
        this.loop = true;
        this.playList.forEach((sound) => {
          sound.loop = true;
        });
      } else {
        this.loop = false;
        this.playList.forEach((sound) => {
          sound.loop = false;
        });
      }

      this.overlap = overlap;
      this.random = mode === "random";
    },

    remove: function (audio) {
      let newPlayList = [];
      this.playList.forEach((sound) => {
        if (sound === audio) {
          sound.pause();
        } else newPlayList.push(sound);
      });
      this.playList = newPlayList;
      this.generatePlayUrlList();
    },

    playRandom: function () {
      let idx = randInt(0, this.soundList.length - 1);
      this.play(this.soundList[idx]);
      this.generatePlayUrlList();
    },
  },
};

function audioEnd() {
  if (this.player.playList.length === 1 && this.player.random)
    this.player.playRandom();
  if (this.ended) this.player.remove(this);
}

function randInt(l, h) {
  return Math.floor(Math.random() * (h - l + 1)) + l;
}
</script>

<style scoped>
.main {
  margin-left: 20rem;
  transition: 0.65s cubic-bezier(0.2, 0.39, 0.66, 0.74);
}

.main.active {
  transition: 0.75s cubic-bezier(0.24, 0.3, 0.59, 0.98);
  margin-left: 9rem;
}

.divider {
  width: calc(100% - 2 * var(--radius-size));
  height: 3px;
  padding: 1px;
  margin: auto;
  margin-top: 0.5rem;
  background-color: var(--bs-primary);
  border-radius: 3px;
}

.btn-group {
  margin: 1.5rem 2.8rem;
}
</style>