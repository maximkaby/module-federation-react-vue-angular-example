<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { users } from "./users";

const route = useRoute();
const name = computed(() => users[Number(route.params.id)]);
</script>

<template>
  <div style="margin: 20px">
    <h2>{{ name ?? "Unknown user" }}</h2>
    <RouterLink to="/users">Back to users</RouterLink>
  </div>
</template>
