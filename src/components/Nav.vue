<template>
  <div>
    <!-- Nav -->
    <nav></nav>
    <!-- Btn category selection for mobile -->

    <!-- Btn category selection for pc or taplate-->
    <aside class="side-bar-wrap" ref="sideBar" @mouseover="toggleSideBarTrue()" @mouseleave="toggleSideBarFalse()">
      <nav class="side-bar">
        <div class="logo-area">
          <img class="min" src="../assets/logo.png" alt="logo" />
          <span class="logo-text title">SainTaffy</span>
        </div>
        <ul>
          <li class="active">
            <a href="#">
              <span class="icon">
                <ion-icon name="home-outline"></ion-icon>
              </span>
              <span class="title">Home</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="icon">
                <ion-icon name="newspaper-outline"></ion-icon>
              </span>
              <span class="title">Notícias</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="icon">
                <ion-icon name="chatbox-ellipses-outline"></ion-icon>
              </span>
              <span class="title">Mensagens</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="icon">
                <ion-icon name="headset-outline"></ion-icon>
              </span>
              <span class="title">Músicas</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="icon">
                <ion-icon name="play-outline"></ion-icon>
              </span>
              <span class="title">Vídeos</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  </div>
</template>

<script>
export default {
  name: "nav",

  props: {
    btnOverview: Object,
  },

  mounted() {
  },
  data: () => {
    return {
      sideBarToggled: false,
    };
  },

  methods: {
    toggleSideBarTrue() {
      this.$emit('sideBarToggled', true);
    },
    toggleSideBarFalse() {
      this.$emit('sideBarToggled', false);
    },
  }
};
</script>

<style scoped>
/* SideBar */
aside.side-bar-wrap {
  --radius-size: 25px;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  overflow-y: scroll;
  overflow-x: hidden;
}
aside.side-bar-wrap::-webkit-scrollbar {
  width: 10px;
}
aside.side-bar-wrap::-webkit-scrollbar-track {
  background-color: transparent;
}
aside.side-bar-wrap::-webkit-scrollbar-thumb {
  border-radius: var(--radius-size);
  background-color: var(--bs-primary);
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
  justify-content: center;
  align-items: center;
  padding: 20px;
  min-height: var(--curve-size);
}
nav.side-bar .logo-area img {
  position: relative;
  max-width: 4rem;
  transition-duration: 1s;
}

nav.side-bar ul {
  padding: 0;
  margin: calc(2 * var(--radius-size)) 0;
  display: flex;
  flex-direction: column;
}
nav.side-bar ul li {
  height: 50px;
  padding: 10px var(--radius-size);
  list-style: none;
  border-radius: var(--radius-size);
  margin-bottom: var(--radius-size);
  z-index: 1;
}
nav.side-bar ul li:not(.active) {
  z-index: 2;
}
nav.side-bar ul li:not(.active):hover {
  backdrop-filter: brightness(0.85);
}
nav.side-bar ul li.active {
  position: relative;
  background-color: var(--bs-body-bg);
  border-radius: var(--radius-size) 0 0 var(--radius-size);
  box-shadow: var(--side-padding) 0 var(--bs-body-bg);
}

li.active > a {
  color: var(--bs-primary) !important;
}

nav.side-bar ul li.active::before,
nav.side-bar ul li.active::after {
  --curve-size: calc(2 * var(--radius-size));
  content: "";
  width: var(--curve-size);
  height: var(--curve-size);
  background-color: var(--color-primary);
  left: calc(100% + var(--side-padding) - var(--curve-size));
  border-radius: 50%;
  position: absolute;
}
nav.side-bar ul li.active::before {
  top: calc(-1 * var(--curve-size));
  box-shadow: calc(1 * var(--curve-size) * 0.5) calc(var(--curve-size) * 0.5)
    var(--bs-body-bg);
}
nav.side-bar ul li.active::after {
  bottom: calc(-1 * var(--curve-size));
  box-shadow: calc(1 * var(--curve-size) * 0.5)
    calc(-1 * var(--curve-size) * 0.5) var(--bs-body-bg);
}
nav.side-bar ul li a {
  color: white;
  font-size: 16pt;
  width: 100%;
  height: 100%;
  display: flex;
  gap: 0;
  align-items: center;
  text-decoration: none;
  transition: 1s;
}
aside:hover nav.side-bar ul li a {
  gap: 10px;
}
nav.side-bar span {
  display: flex;
  transition: 0.75s cubic-bezier(0.39, 0.58, 0.57, 1);
}
nav.side-bar ul li a span.icon {
  margin-left: 0.5rem;
  font-size: 3rem;
}
nav.side-bar span.title {
  max-width: 0;
  opacity: 0;
}
aside:hover nav.side-bar span.title {
  width: auto;
  max-width: 10rem;
  opacity: 1;
}

.logo-text {
  font-size: 2rem;
  font-weight: bold;
  color: white;
  padding-left: 1rem;
}
</style>