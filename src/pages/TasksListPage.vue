<template>
    <div class="tasks-list">
        <h1>Tasks</h1>

        <!-- TASKS -->
        <ul v-if="tasks.length">
            <li 
                v-for="(task, index) in tasks" 
                :key=index>
                <span>{{ task }}</span>
            </li>
        </ul>
        <span v-if="!tasks.length">Tasks list is empty yet</span>

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

<style lang="css" scoped>
    
</style>