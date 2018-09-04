<template>
    <div class="add container">
        <h1 class="page-header">用户登录</h1>
        <div>
            <div class="well">
                <div class="form-group">
                    <label>邮箱</label>
                    <input type="text" class="form-control" placeholder="用户名" v-model="userName">
                </div>
                <div class="form-group">
                    <label>密码</label>
                    <input type="text" class="form-control" placeholder="密码" v-model="password">
                </div>
                <button type="submit" class="btn btn-block btn-success" @click="clickLoginBtn">登录</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "login",
        data() {
            return {
                userName: 'zhangsan',
                password: '123456'
            }
        },
        methods: {
            clickLoginBtn() {
                if (this.userName && this.password) {
                    this.onSubmit();
                } else {
                    this.$message.error('用户名或密码不能为空');
                }
            },
            onSubmit() {
                const loginData = {
                    username: this.userName,
                    password: this.password,
                }
                //登录
                this.$axios.post("/login", loginData)
                    .then((response) => {
                        //保存token到vuex和sessionStorage中
                        this.$store.commit(this.$types.LOGIN, response.data.result);
                        //保存用户名到vuex和sessionStorage中
                        this.$store.commit(this.$types.USERNAME, this.userName);
                        //跳转到首页
                        this.$router.push({name: "home",});
                    })
            }
        }
    }
</script>

<style scoped="">

</style>
