<template>
    <div class="sidebar-menu">
        <router-link 
            exact-active-class="sidebar-menu--active" 
            class="sidebar-menu--item" 
            to="/app"
        >
            <TasksIcon class="sidebar-menu--item--logo" />
            <span v-if="expanded" class="sidebar-menu--item--text">Tasks</span>
        </router-link>
        <router-link 
            exact-active-class="sidebar-menu--active" 
            class="sidebar-menu--item" 
            to="/app/profile"
        >
            <ProfileIcon class="sidebar-menu--item--logo" />
            <span v-if="expanded" class="sidebar-menu--item--text">Profile</span>
        </router-link>
        <a 
            exact-active-class="sidebar-menu--active" 
            class="sidebar-menu--item" 
            href="javascript:void(0);"
        >
            <TimeIcon class="sidebar-menu--item--logo" />
            <span v-if="expanded" class="sidebar-menu--item--text">Calendar</span>
        </a>
    </div>
</template>

<script>
    import TasksIcon from '@/assets/svg/sidebar/tasks.svg'
    import ProfileIcon from '@/assets/svg/sidebar/profile.svg'
    import TimeIcon from '@/assets/svg/sidebar/calendar.svg'

    export default {
        name: 'Menu',
        props: {
            expanded: {
                type: Boolean,
                default: false
            }
        },
        components: {
            TasksIcon,
            ProfileIcon,
            TimeIcon
        }
    }
</script>

<style lang="scss">
    .sidebar-menu {
        overflow: hidden;
        width: 100%;

        &--item {
            padding: 4px 34px 4px 30px;
            color: #b3becb;
            fill: #b3becb;
            display: block;
            transition: fill .125s, color .125s;
            position: relative;

            &:hover {
                fill: lighten(#4956F5, 20);
                color: lighten(#4956F5, 20);
            }

            &.sidebar-menu--active {
                fill: #4956F5;
                color: #4956F5;

                &::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    height: 100%;
                    width: 4px;
                    background-color: #4956f5;
                }
            }

            &:not(:last-child) {
                margin-bottom: 26px;
            }

            &--logo {
                width: 32px;
                height: 32px;
                display: inline-block;
                vertical-align: middle;
            }

            &--text {
                display: inline-block;
                vertical-align: middle;
                padding-left: 20px;
                color: inherit;
                position: absolute;
                top: 11px;
                font-size: 18px;
                line-height: 18px;
            }
        }
    }
</style>
