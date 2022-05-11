<template>
 <header>
  <h1>{{ title }}</h1>
 </header>
</template>

<script>
export default {
 props: ["title"],
};
</script>

<style scoped>
header {
 display: flex;
 justify-content: center;
 align-items: center;
 background-color: #222f3e;
 width: 100%;
 height: 4rem;
}

header h1 {
 color: #c8d6e5;
 margin: 0;
}
</style>
