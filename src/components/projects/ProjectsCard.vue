<script>
export default {
    name: 'ProjectsCard',
    props: { project: Object }
};
</script>

<template>
    <div class="card my-3">
        <div class="card-body">
            <h1 class="card-title text-center">{{ project.title }}</h1>
            <div class="row">
                <div class="col-md-6">
                    <p class="card-text">{{ project.description }}</p>
                    <ul class="list-group mb-3">
                        <li class="list-group-item"><strong>Categoria:</strong> {{ project.category }}</li>
                        <li class="list-group-item"><strong>Cliente:</strong> {{ project.client }}</li>
                        <li class="list-group-item"><strong>Ruolo:</strong> {{ project.role }}</li>
                        <li class="list-group-item"><strong>Tipo:</strong> {{ project.type?.label }}</li>
                        <li class="list-group-item"><strong>Data di Inizio:</strong> {{ project.start_date }}</li>
                        <li class="list-group-item"><strong>Data di Completamento:</strong> {{ project.end_date }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>