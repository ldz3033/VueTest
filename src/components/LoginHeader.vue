<template>
    <div>
        <nav class="navbar navbar-default">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"
                            aria-expanded="false" aria-controls="navbar">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand">用户管理系统</a>
                </div>
                <div id="navbar" class="collapse navbar-collapse">
                    <ul class="nav navbar-nav">
                        <li>
                            <router-link to="/home">主页</router-link>
                        </li>
                        <li>
                            <router-link to="/about">关于我们</router-link>
                        </li>
                    </ul>

                    <ul class="nav navbar-nav navbar-right">
                        <li>
                            <router-link to="/add">添加用户</router-link>
                        </li>
                        <li v-if="this.$store.state.token">
                            <a href="javascript:void (0)">{{userName}}</a>
                        </li>
                        <li v-if="!this.$store.state.token">
                            <router-link to="/login">登录</router-link>
                        </li>
                        <li v-else>
                            <a href="javascript:void (0)" @click="logout">退出登录</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "loginHeader",
        data() {
            return {
                userName: this.$store.state.userName
            }
        },
        methods: {
            logout() {
                //清空token
                this.$store.commit(this.$types.LOGOUT)
                this.$router.push({
                    name: 'login'
                })
            }
        }
    }
</script>

<style scoped="">

</style>
