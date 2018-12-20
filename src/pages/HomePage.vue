<template>
    <div>
        <h1>HomePage</h1>
        <ul>
            <li v-for="(item, index) in profile" :key=index>{{ item }}</li>
        </ul>
        <button @click="logoutUser()">Logout</button>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import store from '@/store'

export default {
    name: 'HomePage',
    computed: mapGetters(['profile']),
    methods: {
        ...mapActions(['logout']),
        logoutUser() {
            this.logout().then(() => this.$router.push('/login'))
        }
    },
    created() {
        store.dispatch('getProfile')
    }
}
</script>

<style lang="css" scoped>
    
</style>