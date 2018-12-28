<template>
    <div class="tasks-list">
        <div class="tasks-list-head">
            <h1 class="tasks-list-head--title">Tasks</h1>
            <button class="tasks-list-head--btn" type="button" @click="openNew" >Add new</button>
            <Form v-if="open" :close="closeNew" />
        </div>

        <!-- TASKS -->
        <div class="tasks">
            <!-- Backlog -->
            <div class="tasks__column">
                <div class="tasks__column-title">Backlog</div>
                <Card v-for="task in tasks.backlog" :key="task.uid" :task="task" :toNext="toSprint"
                :stage="1" />
            </div>

            <!-- Sprint -->
            <div class="tasks__column">
                <div class="tasks__column-title">Sprint</div>
                <Card v-for="task in tasks.storypoint" :key="task.uid" :task="task" :toNext="toProcess"
                :stage="2" />
            </div>

            <!-- In Process -->
            <div class="tasks__column">
                <div class="tasks__column-title">In Process</div>
                <Card v-for="task in tasks.progress" :key="task.uid" :task="task" :toNext="toEnd"
                :stage="3" />
            </div>

            <!-- End -->
            <div class="tasks__column">
                <div class="tasks__column-title">Archive</div>
                <Card v-for="task in tasks.archive" :key="task.uid" :task="task"
                :stage="4" />
            </div>
            
        </div>

    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Card from '@/components/app/Card/Card.vue'
import Form from '@/components/app/NewTask/Form.vue'

export default {
    name: 'TasksListPage',
    components: {
        Card,
        Form
    },
    computed: mapGetters(['tasks']),
    data() {
        return {
            open: false
        }
    },
    methods: { 
        ...mapActions(['getTasks', 'changeTaskStatus', 'startTask']),
        toSprint(uid, tags) {
            this.changeTaskStatus({ uid, tags })
        },
        toProcess(uid) {
            this.changeTaskStatus({ uid })
        },
        toEnd(uid, hours) {
            this.changeTaskStatus({ uid, hours })
        },
        openNew() {
            this.open = true
        },
        closeNew() {
            this.open = false
        }
    },
    created() {
        this.getTasks()
    },
}
</script>

<style lang="scss" scoped>

.tasks {
    display: flex;
    overflow-x: auto;

    &-list {
        &-head {
            position: relative;
            display: flex;
            align-items: center;
            margin-bottom: 30px;

            &--title {
                font-weight: 500;
                font-size: 32px;
                color: #2e2e2e;
                margin-right: 40px;
            }

            &--btn {
                border: 2px solid lighten(#4956F5, 20);
                border-radius: 4px;
                font-size: 16px;
                line-height: 18px;
                padding: 10px 15px;
                color: #2e2e2e;
                cursor: pointer;

                &:hover {
                    background-color: #4956f5;
                    color: #fff;
                    border-color: #4956f5;
                }
            }
        }
    }

    &__column {
        display: flex;
        flex: 0 0 auto;
        flex-direction: column;
        width: 300px;
        margin-right: 40px;

        &-title {
            color: #AAB3BC;
            font-weight: 500;
            font-size: 18px;
            margin-bottom: 10px;
        }
    }

     &__card {
        display: flex;
        flex: 0 0 auto;
        padding: 20px;
        flex-direction: column;
        background: #fff;
        box-shadow: 0px 4px 10px rgba(170, 179, 188, 0.19);
        border-radius: 5px;
        margin-bottom: 20px;

         &-title {
            color: #2E2E2E;
            font-weight: 500;
            font-size: 14px;
         }

        &-description {
            color: #AAB3BC;
            font-size: 12px;
        }

        &-button {
            color: #fff;
            background: #51C75B;
            width: 50px;
            align-self: flex-end;

            &:disabled {
                background: #AAB3BC;
                cursor: not-allowed;
            }
        }
     }
}
</style>