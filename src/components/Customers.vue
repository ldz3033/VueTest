<template>
    <div class="customers container">
        <Alert v-if="alert"></Alert>
        <h1 class="page-header">用户管理系统</h1>

        <input type="text" class="form-control" placeholder="搜索" v-model="filterInput">
        <br>
        <table class="table table-striped">
            <thead>
            <tr>
                <th>姓名</th>
                <th>电话</th>
                <th>邮箱</th>
                <th></th>
                <th></th>
            </tr>
            </thead>

            <tbody>
            <tr v-for="customer in filterBy(filterInput)">
                <td>{{customer.name}}</td>
                <td>{{customer.phone}}</td>
                <td>{{customer.email}}</td>
                <td>
                    <router-link class="btn btn-default" v-bind:to="'/customer/'+customer.id">详情</router-link>
                </td>
                <td>
                    <button class="btn btn-danger" v-on:click="removeCustomer(customer.id)">删除</button>
                </td>
            </tr>
            </tbody>

        </table>
    </div>
</template>

<script>
    import Alert from './Alert'

    export default {
        name: 'customers',
        data() {
            return {
                //customers:[],
                filterInput: ""
            }
        },
        methods: {
            fetchCustomers() {
                this.$axios.get("/users")
                    .then((response) => {
                        //this.customers = response.data;
                        this.$store.commit(this.$types.SETCUSTOMERS, response.data);
                    })
            },
            filterBy(value) {
                return this.$store.state.customers.filter(function (customer) {
                    return customer.name.match(value);
                })
            },
            removeCustomer(id) {
                this.$axios.delete("/users/" + id)
                    .then((response) => {
                        this.$store.commit(this.$types.REMOVECUSTOMERS, id);
                    })
            },
            filterBy2() {
                return this.$store.state.customers;
            }
        },
        computed: {
            filterBy1() {
                return this.$store.state.customers;
            },
            alert() {
                return this.$store.state.alert;
            }
        },
        created() {
            if (this.$route.params.alert) {
                this.alert = this.$route.params.alert;
            }
            this.fetchCustomers();
        },
        components: {
            Alert
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
