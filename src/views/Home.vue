<template>
  <div class="home">
    <Nav
      :btnOverview="btnOverview"
      @sideBarToggled="toggleSideBar"
      @activeSetted="setActive"
    />
    <Main
      :btnOverview="btnOverview"
      :sideBarToggled="sideBarToggled"
      :activeId="activeId"
      :useWidgets="true"
    />
    <Footer @showContributors="showContributors" />

    <transition name="modal">
      <Contributors v-if="contributorsShown" @close="closeContributors" />
    </transition>
  </div>
</template>

<script>
import Main from "../components/Main.vue";
import Nav from "../components/Nav.vue";
import Footer from "../components/Footer.vue";
import Contributors from "../components/Contributors.vue";
import axios from "axios";

export default {
  name: "App",

  components: {
    Main,
    Nav,
    Footer,
    Contributors,
  },

  data: () => {
    return {
      loading: false,
      btnOverview: [
        {
          button_list: [
            {
              voice_name: "",
              voice_url: "",
            },
          ],
          button_classification: "",
          icon_url: "",
        },
      ],
      error: null,
      sideBarToggled: false,
      activeId: 0,
      contributorsShown: false,
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
      this.loading = true;
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
    closeContributors() {
      this.contributorsShown = false;
    },
    showContributors() {
      this.contributorsShown = true;
    },
  },
};
</script>

