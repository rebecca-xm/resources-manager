<template>
 <li>
  <div>
   <header>
    <h3>{{ title }}</h3>
    <button>Delete</button>
   </header>
  </div>
  <p>{{ description }}</p>
  <nav>
   <a :href="link">Visit Resource</a>
  </nav>
 </li>
</template>

<script>
export default {
 props: ["title", "description", "link"],
};
</script>

<style scoped>
li {
 margin: auto;
 max-width: 35rem;
}

header {
 display: flex;
 justify-content: space-between;
 align-items: center;
}

h3 {
 font-size: 1rem;
 margin: 0.5rem 0;
}

p {
 margin: 0.5rem 0;
}

a {
 text-decoration: none;
 color: #37b9da;
}

a:hover,
a:active {
 color: #627b91;
}
</style>
