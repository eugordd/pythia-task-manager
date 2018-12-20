<template>
    <div class="header">
        Such a Header with button "Logout"
        <button @click="logoutUser()">Logout</button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        ++
        <router-link to="/app">Tasks</router-link>
        ++
        <router-link to="/app/profile">Profile</router-link>
        ++
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'Header',
    methods: {
        ...mapActions(['logout']),
        logoutUser() {
            this.logout().then(() => this.$router.push('/login'))
        }
    }
}
</script>

<style lang="css">
    
</style>