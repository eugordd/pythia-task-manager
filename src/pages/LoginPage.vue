<template>
    <div class="login-page">
        <h1>Login</h1>
        <form class="login-page__form" @submit.prevent="loginUser(user)">
            <label>User name</label>
            <input required v-model="user.username" type="text" placeholder="Username"/>
            <label>Password</label>
            <input required v-model="user.password" type="password" placeholder="Password"/>
            <hr/>
            <button type="submit">Login</button>
        </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'LoginPage',
    data() {
        return {
            user: {
                username: '',
                password: ''
            }
        }
    },
    methods: {
        ...mapActions(['login']),
        loginUser(user) {
            this.login(user).then(() => this.$router.push({ path: '/app' }))
        }
    }
}
</script>

<style lang="sass" scoped>
    .login-page
        display: flex
        flex-direction: column
        align-items: center
        &__form
            display: flex
            flex-direction: column
            width: 300px
            padding: 10px

    input
      caret-color: red
</style>