<template>
    <div class="alert alert-warning alert-dismissible" role="alert">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close" @click="remove"><span
                aria-hidden="true">&times;</span></button>
        {{message}}
    </div>
</template>

<script>
    export default {
        name: 'alert',
        data() {
            return {}
        },
        methods: {
            remove() {
                this.$store.commit(this.$types.REMOVEALERT)
            }
        },
        computed: {
            message() {
                return this.$store.state.alert;
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
