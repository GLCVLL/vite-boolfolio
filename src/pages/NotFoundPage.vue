<script>
export default {
    name: 'NotFoundPage',
}
</script>

<template>
    <div class="vh-100 d-flex align-items-center justify-content-center flex-column">
        <h2 class="text-white">404 | Page Not Found</h2>
        <button class="btn btn-secondary btn-sm my-3" @click="$router.back()">Go Back to the Home Page</button>
    </div>
</template>

<style></style>