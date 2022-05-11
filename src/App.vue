<template>
 <the-header title="StoreYourDocs" />
 <stored-resources :resources="storedResources" />
</template>

<script>
import StoredResources from "./components/resource-items/StoredResources.vue";
import TheHeader from "./components/layouts/TheHeader.vue";

export default {
 components: {
  StoredResources,
  TheHeader,
 },
 data() {
  return {
   storedResources: [
    {
     id: "01",
     title: "VueJS Guide",
     description: "The official Vue.js documentation.",
     link: "https://vuejs.org",
    },
    {
     id: "02",
     title: "ReactJS Guide",
     description: "The official React.js documentation.",
     link: "https://it.reactjs.org/",
    },
   ],
  };
 },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

* {
 box-sizing: border-box;
}

html {
 font-family: "Montserrat", sans-serif;
}

body {
 margin: 0;
}
</style>
