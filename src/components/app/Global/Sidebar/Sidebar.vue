<template>
    <div tabindex="0" @blur="closeExpand" class="sidebar" ref="sidebar">
        <div class="sidebar-logo">
            <a href="javascript:void(0);" class="sidebar-logo--img"></a>
        </div>
        <Menu :expanded="isExpanded" />
        <button class="sidebar-expand" type="button" @click="toggleExpand">
            <ExpandIcon class="sidebar-expand--icon" />
        </button>
    </div>
</template>

<script>
import Menu from './Menu.vue'
import ExpandIcon from '@/assets/svg/sidebar/expand.svg'

export default {
    name: 'Sidebar',
    components: {
        Menu,
        ExpandIcon
    },
    data() {
        return {
            isExpanded: false
        }
    },
    methods: {
        toggleExpand() {
            const open = () => {
                this.$refs.sidebar.classList.add('expanded')
                this.$refs.sidebar.focus()
            }
            const close = () => {
                this.$refs.sidebar.classList.remove('expanded')
                this.$refs.sidebar.blur()                
            }
            !this.isExpanded ? open() : close()
            this.isExpanded = !this.isExpanded
        },
        closeExpand() {
            this.isExpanded && this.toggleExpand()
        }
    }
}
</script>

<style lang="scss">
    .sidebar {
        background-color: #ffffff;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        position: fixed;
        left: 0;
        top: 0;
        height: 100%;
        z-index: 20;
        width: 96px;
        transition: width .25s;

        &:focus {
            outline: 0;
        }

        &.expanded {
            width: 250px;
        }

        &-logo {
            height: 84px;
            width: 96px;
            display: flex;
            justify-content: center;
            align-items: center;

            &--img {
                display: block;
                width: 58px;
                height: 48px;
                background-image: url('/images/svg/logo.svg');
                background-size: cover;
                background-repeat: no-repeat;
            }
        }

        &-expand {
            background: 0;
            border: 0;
            display: block;
            fill: #B3BECB;
            cursor: pointer;
            padding: 12px 40px 12px 29px;
            margin-bottom: 20px;

            &:focus {
                outline: 0;
            }

            &--icon {
                width: 27px;
                height: 23px;
            }
        }
    }
</style>