<template>
    <div class="add">
        <add></add>
    </div>
</template>

<script>
    // @ is an alias to /src
    import Add from '@/components/Add.vue'

    export default {
        name: 'addUser',
        components: {
            Add,
        }
    }
</script>
