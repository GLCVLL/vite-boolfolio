<script>
import AppHeader from './components/AppHeader.vue';

export default {
  components: { AppHeader },
}
</script>

<template>
  <header>
    <AppHeader />
  </header>
  <main class="container my-3">
    <RouterView />
  </main>
</template>

<style></style>