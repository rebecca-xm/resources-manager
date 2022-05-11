<template>
 <resource-card>
  <form>
   <div class="form">
    <label for="title">Title</label>
    <input id="title" name="title" type="text" />
   </div>
   <div class="form">
    <label for="description">Description</label>
    <textarea
     name="description"
     id="description"
     cols="30"
     rows="10"
    ></textarea>
   </div>
   <div class="form">
    <label for="link">Link</label>
    <input id="link" name="link" type="url" />
   </div>
   <div>
    <resource-button type="submit">Add Resource</resource-button>
   </div>
  </form>
 </resource-card>
</template>

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
