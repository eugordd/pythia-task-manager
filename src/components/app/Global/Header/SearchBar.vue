<template>
    <div class="searchbar-wrap">
        <input type="text" class="searchbar" id="search" v-model="text" @input="changeText()">
        <i class="searchbar-icon"></i>
        <label v-if="isEmpty" for="search" class="searchbar-label">Search</label>
    </div>
</template>

<script>
export default {
    name: 'SearchBar',
    data() {
        return {
            text: '',
            isEmpty: true
        }
    },
    methods: {
        changeText() {
            this.isEmpty = this.text.length === 0
        }
    }
}
</script>

<style lang="scss">
    .searchbar {
        padding: 29px 30px 30px 65px;
        font-size: 18px;
        width: 100%;
        line-height: 21px;
        border: 0;
        flex: 1;

        &:focus {
            outline: 0;
            & ~ .searchbar-label {
                display: none;
            }
        }

        &-wrap {
            position: relative;
            flex: 1;
            display: flex;
        }

        &-icon {
            position: absolute;
            left: 20px;
            top: 26px;
            width: 32px;
            height: 32px;
            background-image: url('/images/svg/magnify.svg');
            background-size: contain;
        }

        &-label {
            position: absolute;
            top: 30px;
            left: 65px;
            font-size: 18px;
            line-height: 21px;
            color: #b3becb;
        }
    }
        
</style>

