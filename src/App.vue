<template>
  <div v-if="!loading">
    <div v-for="btn of btns" :key="btn">
      <TaffyBtnGroup :btns="btn" />
    </div>
  </div>
</template>

<script>
import TaffyBtnGroup from "./components/TaffyBtnGroup.vue";
import axios from "axios";

export default {
  name: "App",

  components: {
    TaffyBtnGroup,
  },

  data: () => {
    return {
      loading: false,
      btns: null,
      error: null,
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
          this.btns = response.data.data;
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
