<template>
  <nav class="header">
    <RouterLink to="/" exact-active-class="active">Home</RouterLink>
    <RouterLink to="/about" active-class="active">About</RouterLink>
    <RouterLink to="/users" active-class="active">Users</RouterLink>
  </nav>
</template>

<style scoped>
.header {
  display: flex;
  gap: 20px;
  padding: 15px 20px;
  background: #1f2124;
  border-radius: 5px;
  margin: 20px;
}

.header a {
  color: white;
  text-decoration: none;
}

.header a.active {
  color: #42b883;
  font-weight: bold;
}
</style>
