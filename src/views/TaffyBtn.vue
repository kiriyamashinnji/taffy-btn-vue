<template>
  <div class="home">
    <Nav
      :btnOverview="btnOverview"
      @sideBarToggled="toggleSideBar"
      @activeSetted="setActive"
    />
    <MainContainer :sideBarToggled="sideBarToggled">
      <TopNav></TopNav>
      <MainBtn :btnOverview="btnOverview" :activeId="activeId"></MainBtn>
    </MainContainer>
    <Footer @showContributors="showContributors" />

    <transition name="modal">
      <Acknowledgement v-if="contributorsShown" @close="closeContributors" />
    </transition>
  </div>
</template>

<script>
import TopNav from "../components/TopNav.vue";
import MainContainer from "../components/MainContainer.vue";
import Nav from "../components/Nav.vue";
import Footer from "../components/Footer.vue";
import Acknowledgement from "../components/Acknowledgement.vue";
import MainBtn from "../components/MainBtn.vue";
import axios from "axios";

export default {
  name: "App",

  components: {
    TopNav,
    Nav,
    Footer,
    Acknowledgement,
    MainContainer,
    MainBtn
  },

  data: () => {
    return {
      loading: false,
      btnOverview: [
        {
          button: [
            {
              voice_name: "",
              voice_url: "",
            },
          ],
          category_name: "",
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
        .get("http://110.40.128.2/api/btn/overviews", {
          mode: "no-cors",
          headers: {
            'Access-Control-Allow-Credentials': true
          }
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