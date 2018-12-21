<template>
    <header class="header">
        <SearchBar />
        <UserTab />
        <button class="header-block" type="button">
            <div class="header-button header-button--bell"></div>
        </button>
        <button class="header-block" type="button">
            <div class="header-button header-button--info"></div>
        </button>
        <!-- Such a Header with button "Logout"
        <button @click="logoutUser()">Logout</button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        ++
        <router-link to="/app">Tasks</router-link>
        ++
        <router-link to="/app/profile">Profile</router-link>
        ++ -->
    </header>
</template>

<script>
import { mapActions } from 'vuex'
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

        &-block {
            padding: 27px 30px 25px;
            transition: background-color .125s;
            border: 0;
            background: 0;
            cursor: pointer;

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