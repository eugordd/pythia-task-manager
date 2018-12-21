<template>
    <div tabindex="0" class="header-usertab" ref="usertab" v-on:blur="closeAccountInfo">
        <div class="header-usertab-head" v-on:click="toggleAccountInfo">
            <div class="header-usertab--img"></div>
            <span class="header-usertab--name">{{ profile.username }}</span>
            <i class="header-usertab--angle"></i>
        </div>
        <div v-if="isOpen" class="header-usertab-body">
            <router-link to="/app/profile" class="header-usertab-body--btn" type="button">Profile</router-link>
            <router-link to="/app" class="header-usertab-body--btn" type="button">Tasks</router-link>
            <div class="header-usertab-body--separator"></div>
            <button class="header-usertab-body--btn" type="button" v-on:click="logoutUser">Log out</button>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'UserTab',
    data() {
        return {
            isOpen: false
        }
    },
    computed: mapGetters(['profile']),
    methods: {
        ...mapActions(['getProfile', 'logout']),
        toggleAccountInfo() {
            if (!this.isOpen) {
                this.$nextTick(() => {
                    this.$refs.usertab.focus()
                })
            }
            this.isOpen = !this.isOpen
        },
        closeAccountInfo() {
            this.isOpen = false
        },
        logoutUser() {
            this.logout().then(() => this.$router.push('/login'))
        }
    },
    created() {
        this.getProfile()
    }
}
</script>

<style lang="scss">
    .header-usertab {
        position: relative;

        &:focus {
            outline: 0;

            .header-usertab-head {
                background-color: #f1f3f5;
            }
        }

        &-head {
            padding: 18px 34px 19px;
            font-size: 0;
            border-right: 1px solid rgba(170, 179, 188, 0.19);
            cursor: pointer;

            &:hover {
                background-color: #f1f3f5;
            }
        }

        &--img {
            width: 47px;
            height: 47px;
            background-color: #2e2e2e;
            border-radius: 50%;
            display: inline-block;
            vertical-align: middle;
            margin-right: 19px;
        }

        &--name {
            font-weight: 500;
            font-size: 16px;
            line-height: 19px;
            color: #2e2e2e;
            margin-right: 19px;
            display: inline-block;
            vertical-align: middle;
        }

        &--angle {
            width: 11px;
            height: 7px;
            display: inline-block;
            vertical-align: middle;
            background-image: url('/images/svg/angle.svg');
            background-size: contain;
            background-repeat: no-repeat;
        }

        &-body {
            background-color: #ffffff;
            position: absolute;
            top: 84px;
            left: 0;
            width: 100%;
            padding: 10px 5px;
            box-shadow: 0 2px 5px rgba(170, 179, 188, 0.19);

            &--btn {
                border: 0;
                background: 0;
                font-size: 18px;
                line-height: 21px;
                color: #2e2e2e;
                width: 100%;
                display: block;
                padding: 20px 10px;
                cursor: pointer;
                border-radius: 4px;
                text-decoration: none;
                text-align: left;

                &:hover {
                    background-color: #f1f3f5;
                }

                &:focus {
                    outline: 0;
                }
            }

            &--separator {
                width: 100%;
                margin-top: 5px;
                margin-bottom: 5px;
                border-top: 1px solid rgba(170, 179, 188, 0.19);
            }
        }
    }
</style>

