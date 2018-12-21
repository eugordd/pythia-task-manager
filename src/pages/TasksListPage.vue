<template>
    <div class="tasks-list">
        <h1>Tasks</h1>

        <!-- TASKS -->
        <div class="tasks">
            <!-- Backlog -->
            <div class="tasks__column">
                <div class="tasks__column-title">Backlog</div>
                <div class="tasks__card" v-for="task in tasks.backlog" :key="task.uid">
                    <span class="tasks__card-title">{{ task.title }}</span>
                    <span class="tasks__card-description">{{ task.description }}</span>
                </div>
            </div>

            <!-- Sprint -->
            <div class="tasks__column">
                <div class="tasks__column-title">Sprint</div>
                <div class="tasks__card" v-for="task in tasks.storypoint" :key="task.uid">
                    <span class="tasks__card-title">{{ task.title }}</span>
                    <span class="tasks__card-description">{{ task.description }}</span>
                </div>
            </div>

            <!-- In Process -->
            <div class="tasks__column">
                <div class="tasks__column-title">In Process</div>
                <div class="tasks__card" v-for="task in tasks.progress" :key="task.uid">
                    <span class="tasks__card-title">{{ task.title }}</span>
                    <span class="tasks__card-description">{{ task.description }}</span>
                </div>
            </div>

            <!-- End -->
            <div class="tasks__column">
                <div class="tasks__column-title">End</div>
                <div class="tasks__card" v-for="task in tasks.archive" :key="task.uid">
                    <span class="tasks__card-title">{{ task.title }}</span>
                    <span class="tasks__card-description">{{ task.description }}</span>
                </div>
            </div>
            
        </div>

    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'TasksListPage',
    computed: mapGetters(['tasks']),
    methods: mapActions(['getTasks']),
    created() {
        this.getTasks()
    }
}
</script>

<style lang="sass" scoped>

.tasks-list
    width: 1000px
    margin: 0 auto

.tasks
    display: flex
    overflow-x: scroll

    &__column
        display: flex
        flex: 0 0 auto
        flex-direction: column
        width: 300px
        margin-right: 40px

        &-title
            color: #AAB3BC
            font-weight: 500
            font-size: 18px
            margin-bottom: 10px

    &__card
        display: flex
        flex: 0 0 auto
        padding: 20px
        flex-direction: column
        background: #fff
        box-shadow: 0px 4px 10px rgba(170, 179, 188, 0.19)
        border-radius: 5px
        margin-bottom: 20px

        &-title
            color: #2E2E2E
            font-weight: 500
            font-size: 14px

        &-description
            color: #AAB3BC
            font-size: 12px
            

    
</style>