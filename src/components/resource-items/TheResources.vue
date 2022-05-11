<template>
 <resource-card>
  <resource-button @click="setSelectedTab('stored-resources')"
   >Stored Resources</resource-button
  >
  <resource-button @click="setSelectedTab('add-resource')"
   >Add Resource</resource-button
  >
 </resource-card>
 <component :is="selectedTab"></component>
</template>

<script>
import StoredResources from "./StoredResources.vue";
import AddResource from "./AddResource.vue";

export default {
 components: {
  StoredResources,
  AddResource,
 },
 data() {
  return {
   selectedTab: "stored-resources",
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
 provide() {
  return {
   resources: this.storedResources,
  };
 },
 methods: {
  setSelectedTab(tab) {
   this.selectedTab = tab;
  },
 },
};
</script>
