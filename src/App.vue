<template>
    <div id="app" class="app">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'app'  
}
</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500');
    
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

    .text-center {
        text-align: center !important; 
    }

    .text-left {
        text-align: left !important; 
    }

    .app {
        width: 100%;
        height: 100%;
    }
</style>