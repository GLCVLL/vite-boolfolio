<script>
import axios from 'axios';
import ProjectsCard from '../components/projects/ProjectsCard.vue';
const apiBaseUri = 'http://localhost:8000/api/projects/';
export default {
    name: 'ProjectDetailPage',
    components: { ProjectsCard },
    data: () => ({
        project: null,
        isLoading: false
    }),
    methods: {
        getProject() {
            this.isLoading = true;
            const endpoint = apiBaseUri + this.$route.params.id;
            axios.get(endpoint)
                .then(res => { this.project = res.data; })
                .catch(err => { this.$router.push({ name: 'not-found' }) })
                .then(() => { this.isLoading = false });
        }
    },
    created() {
        this.getProject();
    }
};
</script>

<template>
    <AppLoader v-if="isLoading && !project" />
    <ProjectsCard v-if="!isLoading && project" :project="project" :isDetail="true" />
</template>

<style></style>