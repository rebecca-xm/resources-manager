<template>
 <button>
  <slot></slot>
 </button>
</template>

<style scoped>
button {
 font-family: inherit;
 background-color: transparent;
 border: none;
 color: #222f3e;
 padding: 0.75rem 1.5rem;
 cursor: pointer;
}

button:hover,
button:active {
 background-color: #222f3e;
 border-color: #222f3e;
 color: #c8d6e5;
}
</style>
