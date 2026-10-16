<script setup lang="ts">
import { users } from "./users";
</script>

<template>
  <div style="margin: 20px">
    <h2>Users</h2>
    <ul>
      <li v-for="(name, id) in users" :key="name">
        <RouterLink :to="`/users/${id}`">{{ name }}</RouterLink>
      </li>
    </ul>
  </div>
</template>
