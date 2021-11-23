<template>
  <li @click="setActive()" :class="{ active: categoryId == activeId }">
    <a href="#">
      <span class="icon">
        <img :src="iconUrl" />
      </span>
      <span class="title">{{ categoryName }}</span>
    </a>
  </li>
</template>

<script>
export default {
  name: "SideBarCat",

  props: {
    categoryName: String,
    activeId: Number,
    categoryId: Number,
    iconUrl: String,
  },

  methods: {
    setActive() {
      this.$emit("activeSetted", this.categoryId);
    },
  },
};
</script>

<style>
nav.side-bar ul li {
  height: 5rem;
  padding: 0.3rem 1rem;
  list-style: none;
  border-radius: var(--radius-size);
  margin: calc(var(--radius-size) / 3) 0;
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
  box-shadow: 13px 0 var(--bs-body-bg);
}

li.active > a {
  color: var(--bs-primary) !important;
  transition: all 0.1s;
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
  color: var(--bs-body-bg);
  font-size: 16pt;
  width: 100%;
  height: 100%;
  display: flex;
  gap: 0;
  align-items: center;
  text-decoration: none;
  transition-duration: 0.2s;
}
aside:hover nav.side-bar ul li a {
  gap: 10px;
}
nav.side-bar span {
  display: flex;
  transition: 0.75s;
}
nav.side-bar ul li a span.icon {
  margin-left: 0.5rem;
  font-size: 3rem;
}
nav.side-bar span.title {
  width: 0rem;
  opacity: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
aside:hover nav.side-bar span.title {
  width: 10rem;
  opacity: 1;
  margin-left: 0.7rem;
}

.icon img {
  width: 5rem;
}

.icon {
  overflow: hidden;
  background-color: var(--bs-body-bg);
  padding: 0rem;
  border-radius: 30%;
}
</style>