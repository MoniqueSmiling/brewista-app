<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style>
.card {
  border-radius: 12px;
  border: 1px lightgrey solid;
  padding: 1rem;
  margin: 2rem auto;
  max-width: 20rem;
}
</style>