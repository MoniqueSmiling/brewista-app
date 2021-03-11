<template>
  <section>
    <ul v-if="hasBrews">
      <brew-item
        v-for="brew in brewsList"
        :key="brew.id"
        :id="brew.id"
        :name="brew.name"
        :brewer="brew.brewer"
        :description="brew.description"
        :country="brew.country"
        :varities="brew.varieties"
        :process="brew.process"
        :profile="brew.profile"
      ></brew-item>
    </ul>
    <h3 v-else>No brews found!</h3>
  </section>
</template>

<script>
import BrewItem from "../../components/brews/BrewItem.vue";

export default {
  components: {
    BrewItem,
  },
  props: ["id"],
  computed: {
    brewsList() {
      return this.$store.getters["brews/brews"];
    },
    hasBrews() {
      return this.$store.getters["brews/hasBrews"];
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

a:router-link {
  text-decoration: none;
}

li {
}
</style>