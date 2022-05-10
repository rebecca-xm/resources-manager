<template>
 <ul>
  <resource-item
   v-for="res of storedResources"
   :key="res.id"
   :title="res.title"
   :description="res.description"
   :link="res.link"
  ></resource-item>
 </ul>
</template>

<script>
import ResourceItem from "./components/resource-item/ResourceItem.vue";

export default {
 components: {
  ResourceItem,
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
