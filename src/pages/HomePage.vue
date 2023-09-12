<script>
import axios from 'axios';
const endpoint = 'http://localhost:8000/api/projects/';
import ProjectsList from '../components/projects/ProjectsList.vue/';
import AppAlert from '../components/projects/AppAlert.vue/';
export default {
    name: 'HomePage',
    components: { ProjectsList, AppAlert },
    data: () => ({ projects: [], isLoading: false, isAlertOpen: false }),
    methods: {
        fetchProjects() {
            this.isLoading = true;
            this.isAlertOpen = false;
            axios.get(endpoint)
                .then(res => { this.projects = res.data })
                .catch(err => {
                    console.log(err);
                    this.isAlertOpen = true;
                })
                .then(() => { this.isLoading = false })
        }
    },
    created() {
        this.fetchProjects();
    }
};
</script>

<template>
    <AppAlert :isOpen="isAlertOpen" @close="isAlertOpen = false" type="danger" />
    <AppLoader v-if="isLoading" />
    <ProjectsList v-else :projects="projects" />
</template>

<style></style>