<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred {{error}}</h1>
    <NuxtLink to="/">Вернуться на главную</NuxtLink>
  </div>
</template>

<script>
export default {
  props: ['error'],
}
</script>
