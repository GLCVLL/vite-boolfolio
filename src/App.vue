<script>
import axios from 'axios';
const endpoint = 'http://localhost:8000/api/projects/';
import AppHeader from './components/AppHeader.vue';
import ProjectsList from './components/projects/ProjectsList.vue/';
export default {
  components: { AppHeader, ProjectsList },
  data: () => ({ projects: [] }),
  methods: {
    fetchProjects() {
      axios.get(endpoint).then(res => { this.projects = res.data })
    }
  },
  created() {
    this.fetchProjects();
  }
};
</script>

<template>
  <header>
    <AppHeader />
  </header>
  <main class="container my-3">
    <ProjectsList :projects="projects" />
  </main>
</template>

<style></style>