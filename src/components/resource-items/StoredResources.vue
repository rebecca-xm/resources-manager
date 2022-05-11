<template>
 <ul>
  <resource-item
   v-for="res of resources"
   :key="res.id"
   :title="res.title"
   :description="res.description"
   :link="res.link"
  ></resource-item>
 </ul>
</template>

<script>
import ResourceItem from "./ResourceItem.vue";

export default {
 inject: ["resources"],
 components: {
  ResourceItem,
 },
};
</script>

<style scoped>
ul {
 list-style: none;
 margin: auto;
 padding: 0;
 max-width: 35rem;
}
</style>
