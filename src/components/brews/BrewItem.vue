<template>
  <li>
    <router-link :to="brewMethodLink">
      <base-card>
        <h3>{{ name }}</h3>
        <h4>{{ brewer }}</h4>

        <div>
          <p>{{ description }}</p>
        </div>

        <div class="details">
          <h5>Process</h5>
          <h6>{{ process }}</h6>
          <h5>Roast profile</h5>
          <h6>{{ profile }}</h6>
        </div>
        <div class="details">
          <h5>varieties</h5>
          <h6 v-for="variety in varieties" :key="variety">{{ variety }}</h6>
          <h5>country</h5>
          <h6>{{ country }}</h6>
        </div>
      </base-card>
    </router-link>
  </li>
</template>

<script>
export default {
  props: [
    "id",
    "name",
    "brewer",
    "description",
    "process",
    "profile",
    "varieties",
    "country",
  ],
  computed: {
    brewMethodLink() {
      return this.$route.path + "/" + this.id + "/brew-methods";
    },
  },
};
</script>

<style scoped>
a,
a:hover {
  text-decoration: none;
  color: black;
}

div .details {
  display: flex;
}
</style>