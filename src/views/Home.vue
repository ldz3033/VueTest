<template>
    <div class="home">
        <customers></customers>
    </div>
</template>

<script>
    // @ is an alias to /src
    import Customers from '@/components/Customers.vue'

    export default {
        name: 'home',
        components: {
            Customers,
        }
    }
</script>
