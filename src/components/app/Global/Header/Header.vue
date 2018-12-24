<template>
    <header class="header">
        <SearchBar />
        <div class="header-right">
            <UserTab />
            <ul class="header-list">
                <button class="header-block" type="button">
                    <div class="header-button header-button--bell"></div>
                </button>
                <button class="header-block" type="button">
                    <div class="header-button header-button--info"></div>
                </button>
            </ul>
        </div>
    </header>
</template>

<script>
import SearchBar from './SearchBar.vue'
import UserTab from './UserTab.vue'

export default {
    name: 'Header',
    components: {
        SearchBar,
        UserTab
    }
}
</script>

<style lang="scss">
    .header {
        display: flex;
        position: fixed;
        top: 0;
        left: 96px;
        width: calc(100% - 96px);
        background-color: #ffffff;
        z-index: 10;

        &-right {
            display: flex;
        }

        &-list {
            flex: none;
            list-style: none;
            padding-left: 0;
            margin: 0;
            display: flex;
        }

        &-block {
            display: block;
            padding: 27px 30px 25px;
            transition: background-color .125s;
            border: 0;
            background: 0;
            cursor: pointer;
            flex: 1 93px;

            &:focus {
                outline: 0;
            }

            &:hover {
                background-color: #f1f3f5;
            }

            &:not(:last-child) {
                border-right: 1px solid rgba(170, 179, 188, 0.19);
            }
        }

        &-button {
            width: 32px;
            height: 32px;

            &--bell {
                background-image: url("/images/svg/bell.svg");
            }

            &--info {
                background-image: url("/images/svg/info.svg");
            }
        }
    }    
</style>