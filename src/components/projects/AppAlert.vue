<script>
export default {
    name: 'AppAlert',
    props: { isOpen: Boolean, type: String },
    emits: ['close'],
}
</script>

<template>
    <div v-if="isOpen" :class="alert - $(type || 'info')" class="alert alert-danger alert-dismissible fade show my-3"
        role="alert">
        <strong>Attention</strong> You should check in on some of those fields below.
        <button type="button" class="btn-close" @click="$emit('close')"></button>
    </div>
</template>