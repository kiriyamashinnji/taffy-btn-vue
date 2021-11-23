<template>
  <div>
    <Nav 
      :btnOverview="btnOverview" 
      @sideBarToggled="toggleSideBar"
      @activeSetted="setActive"  
    />
    <Main 
      :btnOverview="btnOverview" 
      :sideBarToggled="sideBarToggled"
      :activeId="activeId"
    />
    <Footer/>
    <Widgets/>
  </div>
</template>

<script>
import Main from "./components/Main.vue";
import Nav from "./components/Nav.vue";
import Footer from "./components/Footer.vue";
import Widgets from "./components/Widgets.vue";
import axios from "axios";

export default {
  name: "App",

  components: {
    Main,
    Nav,
    Footer,
    Widgets,
},

  data: () => {
    return {
      loading: false,
      btnOverview: null,
      error: null,
      sideBarToggled: false,
      activeId: 0,
    };
  },

  created() {
    this.fetchData();
  },

  methods: {
    toggleSideBar(x) {
      this.sideBarToggled = x;
    },
    setActive(id) {
      this.activeId = id;
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
  --side-padding: 10px;
  --radius-size: 25px;
  --bs-secondary: #ffe2df;
}
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}

html {
  background-color: var(--bs-body-bg);
}
</style>
