<template>
  <div>
    <nav :btnOverview="btnOverview" @sideBarToggled="toggleSideBar"></nav>
    <main :btnOverview="btnOverview" :sideBarToggled="sideBarToggled"></main>
  </div>
</template>

<script>
import Main from "./components/Main.vue";
import Nav from "./components/Nav.vue";
import axios from "axios";

export default {
  name: "App",

  components: {
    Main,
    Nav,
  },

  data: () => {
    return {
      loading: false,
      btnOverview: null,
      error: null,
      sideBarToggled: false,
    };
  },

  created() {
    this.fetchData();
  },

  methods: {
    toggleSideBar(x) {
      this.sideBarToggled = x
      console.log(x)
    },

    fetchData() {
      this.isloading = true;
      this.error = null;

      axios
        .get("http://117.50.163.143/taffy-btn-api/get-overview", {
          mode: "no-cors",
        })
        .then((response) => {
          this.loading = false;
          this.btnOverview = response.data.data;
        })
        .catch((error) => {
          this.error = error;
        });
    },
  },
};
</script>

<style>
:root {
  --bs-primary: #fd507e;
  --bs-body-bg: #fffffa;
  --bs-btn-hover: #cf2f59;
  --side-padding: 8px;
  --radius-size: 25px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: var(--bs-body-bg);
}
</style>
