<template>
    <div class="app-layout">
        <Sidebar />
        <div class="app-layout__wrap">
            <Header />
            <div class="app-layout__page">
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
        width: 100%;
        height: 100%;

        &__wrap {
            display: flex;
            width: 100%;
            height: 100%;
        }

        &__page {
            background: #F7F8F9;
            flex: 1 1;
            position: relative;
            overflow-y: auto;
            margin-left: 96px;
            padding-top: 110px;
            padding-left: 53px;
            box-sizing: border-box;
            width: 100%;
            height: 100%;
        }
    }

</style>