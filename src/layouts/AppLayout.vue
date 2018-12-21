<template>
    <div class="app-layout">
        <Header />
        <Sidebar />
        <router-view />
    </div>
</template>

<script>
import Header from '@/components/app/Global/Header/Header.vue'
import Sidebar from '@/components/app/Global/Sidebar/Sidebar.vue'

export default {
    name: 'AppLayout',
    components: {
        Sidebar,
        Header
    }
}
</script>

<style lang="css">
    
</style>