<script>
export default {
    name: 'ProjectsCard',
    props: { project: Object, isDetail: Boolean },
    computed: {
        abstract() {
            const abstract = this.project.description.slice(0, 199);
            return abstract + '...';
        }
    },
};
</script>

<template>
    <div class="card my-5">
        <div class="card-body">
            <h1 class="card-title text-center my-4">{{ project.title }}</h1>
            <div class="row">
                <div class="col-md-6">
                    <p class="card-text">{{ isdetail ? project.description : abstract }}</p>
                    <ul class="list-group mb-3">
                        <li class="list-group-item"><strong>Categoria:</strong> {{ project.category }}</li>
                        <li class="list-group-item"><strong>Cliente:</strong> {{ project.client }}</li>
                        <li class="list-group-item"><strong>Ruolo:</strong> {{ project.role }}</li>
                        <li class="list-group-item"><strong>Tipo:</strong> {{ project.type?.label }}</li>
                        <li class="list-group-item"><strong>Data di Inizio:</strong> {{ project.start_date }}</li>
                        <li class="list-group-item"><strong>Data di Completamento:</strong> {{ project.end_date }}</li>
                    </ul>
                    <RouterLink class="btn btn-primary" :to="{ name: 'project-detail', params: { id: project.id } }"> Go to
                        the Project
                    </RouterLink>
                </div>
                <div class="col-md-6">
                    <img v-if="project.cover_image" :src="project.cover_image" :alt="project.title" class="img-fluid">
                </div>
            </div>
        </div>
    </div>
</template>