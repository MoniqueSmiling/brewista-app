<template>
  <header>
    <nav>
      <router-link to="/">Back</router-link>
      <h1 v-if="true">Brewista</h1>
      <h2 v-else-if="false">Page Name</h2>
      <router-link to="/">User</router-link>
    </nav>
  </header>
</template>

<style>
header {
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

header nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header a {
  text-decoration: none;
  display: inline-block;
}

header h1 {
  display: inline-block;
}
</style>