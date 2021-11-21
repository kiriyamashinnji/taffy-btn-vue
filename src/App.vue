<template>
  <Nav :btnOverview="btnOverview" :sideBarWidth="sideBarWidth"></Nav>
  <Main :btnOverview="btnOverview" :sideBarWidth="sideBarWidth"></Main>
</template>

<script>
import Main from "./components/Main.vue";
import Nav from "./components/Nav.vue";
import axios from "axios";

export default {
  name: "App",

  components: {
    Nav,
    Main
  },

  data: () => {
    return {
      loading: false,
      btnOverview: null,
      error: null,

      sideBarWidth:'18rem',
    };
  },

  created() {
    this.fetchData();
  },

  methods: {
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
html {
  --bs-primary: #fd507e;
  --bs-body-bg: #fffffa;
  --bs-btn-hover: #cf2f59;

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
