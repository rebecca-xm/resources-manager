<template>
 <resource-modale v-if="invalidInput" title="Invalid Input">
  <template v-slot:default>
   <p>
    If you see this message, please check all inputs and make sure they are all
    filled.
   </p>
  </template>
  <template v-slot:actions>
   <resource-button @click="closeModale"> I understand </resource-button>
  </template>
 </resource-modale>
 <resource-card>
  <form @submit.prevent="submitResource">
   <div class="form">
    <label for="title">Title</label>
    <input id="title" name="title" type="text" ref="titleInput" />
   </div>
   <div class="form">
    <label for="description">Description</label>
    <textarea
     name="description"
     id="description"
     cols="30"
     rows="10"
     ref="descInput"
    ></textarea>
   </div>
   <div class="form">
    <label for="link">Link</label>
    <input id="link" name="link" type="url" ref="linkInput" />
   </div>
   <div>
    <resource-button type="submit">Add Resource</resource-button>
   </div>
  </form>
 </resource-card>
</template>

<script>
export default {
 inject: ["addResource"],
 data() {
  return {
   invalidInput: false,
  };
 },
 methods: {
  submitResource() {
   const submittedTitle = this.$refs.titleInput.value;
   const submittedDesc = this.$refs.descInput.value;
   const submittedLink = this.$refs.linkInput.value;

   if (
    submittedTitle.trim() === "" ||
    submittedDesc.trim() === "" ||
    submittedLink.trim() === ""
   ) {
    this.invalidInput = true;
    return;
   }

   this.addResource(submittedTitle, submittedDesc, submittedLink);
  },
  closeModale() {
   this.invalidInput = false;
  },
 },
};
</script>

<style scoped>
input,
textarea {
 display: block;
 font: inherit;
 width: 100%;
 padding: 0.15rem;
 border: 1px solid #c8d6e5;
}

input:focus,
textarea:focus {
 outline: none;
 background-color: #e6eaf0;
 border-color: #222f3e;
}

.form {
 margin: 1rem 0;
}
</style>
