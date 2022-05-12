<template>
 <div>
  <dialog open>
   <header>
    <slot name="header">
     <h2>{{ title }}</h2>
    </slot>
   </header>
   <section>
    <slot></slot>
   </section>
   <menu>
    <slot name="actions"></slot>
   </menu>
  </dialog>
 </div>
</template>

<script>
export default {
 props: {
  title: {
   type: String,
   required: false,
  },
 },
};
</script>

<style scoped>
div {
 position: fixed;
 top: 0;
 left: 0;
 height: 100vh;
 width: 100%;
 background-color: rgba(0, 0, 0, 0.75);
 z-index: 1;
}

dialog {
 position: fixed;
 top: 20vh;
 left: 10%;
 width: 80%;
 box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
 border-radius: 5px;
 border: none;
 padding: 0;
 margin: 0;
 overflow: hidden;
 z-index: 2;
}

header {
 background-color: #222f3e;
 color: #c8d6e5;
 width: 100%;
 padding: 1rem;
}

header h2 {
 margin: 0;
}

section {
 padding: 1rem;
}

menu {
 display: flex;
 justify-content: right;
 margin: 0;
 padding: 1rem;
}
</style>
