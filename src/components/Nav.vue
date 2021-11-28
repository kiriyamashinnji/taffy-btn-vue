<template>
  <div>
    <aside
      class="side-bar-wrap"
      ref="sideBar"
      @mouseover="toggleSideBarTrue()"
      @mouseleave="toggleSideBarFalse()"
    >
      <nav class="side-bar">
        <div class="logo-area">
          <img class="min" src="../assets/logo.png" alt="logo" />
          <span class="logo-text title">SainTaffy</span>
        </div>
        <div class="divider"></div>
        <ul>
          <SideBarCat
            v-for="(btns, index) in btnOverview"
            :key="btns"
            :categoryName="btns.button_classification"
            :categoryId="index"
            :activeId="activeId"
            :iconUrl="btns.icon_url"
            @activeSetted="setActive"
          />
        </ul>
      </nav>
    </aside>
  </div>
</template>

<script>
import SideBarCat from "./SideBarCat.vue";

export default {
  name: "Nav",

  props: {
    btnOverview: Object,
  },

  components: {
    SideBarCat,
  },

  mounted() {},

  data: () => {
    return {
      sideBarToggled: false,
      activeId: 0,
    };
  },

  methods: {
    toggleSideBarTrue() {
      this.$emit("sideBarToggled", true);
    },
    toggleSideBarFalse() {
      this.$emit("sideBarToggled", false);
    },
    setActive(id) {
      this.activeId = id;
      this.emitActive(id);
    },
    emitActive(id) {
      this.$emit("activeSetted", id);
    },
  },
};
</script>

<style scoped>
/* SideBar */
aside.side-bar-wrap {
  --radius-size: 40px;
  z-index: 1;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  overflow-x: hidden;
}

@media (max-width: 767px) {
  aside.side-bar-wrap {
    display: none;
  }
}

nav.side-bar {
  min-height: 100%;
  background-color: var(--bs-primary);
  display: inline-block;
  padding-left: var(--side-padding);
  padding-right: var(--side-padding);
}
nav.side-bar .logo-area {
  --curve-size: calc(2 * var(--radius-size));
  position: relative;
  display: flex;
  margin: 0 1rem;
  align-items: center;
  padding: 0.5rem;
  min-height: var(--curve-size);
}
nav.side-bar .logo-area img {
  position: relative;
  max-width: 5rem;
  transition: 0.75s ease-out;
}

nav.side-bar ul {
  padding: 0;
  display: flex;
  flex-direction: column;
}

.logo-text {
  font-size: 2rem;
  font-weight: bold;
  color: var(--bs-body-bg);
  transition: 0.75s ease-out;
}

.divider {
  width: calc(100% - var(--radius-size));
  height: 3px;
  padding: 1px;
  margin: auto;
  background-color: var(--bs-body-bg);
  border-radius: 3px;
}
</style>