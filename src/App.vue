<template>
 <the-header title="StoreYourDocs" />
 <the-resources />
</template>

<script>
import TheHeader from "./components/layouts/TheHeader.vue";
import TheResources from "./components/resource-items/TheResources.vue";

export default {
 components: {
  TheHeader,
  TheResources,
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
