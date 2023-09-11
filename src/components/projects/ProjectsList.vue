<script>
import ProjectsCard from './ProjectsCard.vue'
export default {
    name: 'ProjectsList',
    components: { ProjectsCard },
    props: { projects: Array }
};
</script>

<template>
    <section id="projects-list">

        <h2 class="text-center">Projects List</h2>

        <div v-if="projects.length">
            <ProjectsCard v-for="project in projects" :key="project.id" :project="project" />
        </div>

        <h3 v-else class="text-center">No Projects founded</h3>
    </section>
</template>