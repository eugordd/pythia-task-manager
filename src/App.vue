<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'app'  
}
</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css?family=Roboto');
    
    body {
        height: 100vh;
        width: 100vw;
        overflow: hidden;
        min-width: 320px;
        font-family: 'Roboto', Arial, Helvetica, sans-serif;
        margin: 0;
        padding: 0;
    }

    *, *::after, *::before {
        box-sizing: border-box;
    }
</style>