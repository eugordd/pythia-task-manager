<template>
    <div class="app-layout">
        <Header />
        <Sidebar />
        <router-view />
    </div>
</template>

<script>
import Header from '@/components/app/Header.vue'
import Sidebar from '@/components/app/Sidebar.vue'

export default {
    name: 'AppLayout',
    components: {
        Sidebar,
        Header
    }
}
</script>

<style lang="sass">

.app-layout
    background: #F7F8F9

</style>