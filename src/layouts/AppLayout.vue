<template>
    <div class="app-layout">
        <Sidebar />
        <div class="app-layout--wrap">
            <Header />
            <div class="app-layout--page">
                <router-view />
            </div>
        </div>
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

<style lang="scss">
    .app-layout {
        display: flex;

        &--wrap {
            display: flex;
        }

        &--page {
            background: #F7F8F9;
            flex: 1 1;
            position: relative;
            left: 96px;
            top: 84px;
            padding-top: 36px;
            padding-left: 53px;
        }
    }

</style>