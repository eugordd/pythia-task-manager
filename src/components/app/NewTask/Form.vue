<template>
    <div ref="wrap" tabindex="0">
        <div class="tasks-list-form--filter"></div>
        <form action="javascript:void(0);" class="tasks-list-form" @submit="submit">
            <h4 class="tasks-list-form--title">New Task</h4>
            <input type="text" class="tasks-list-form--input" placeholder="Name" v-model="title">
            <textarea class="tasks-list-form--area" placeholder="Description" v-model="description"></textarea>
            <button type="submit" class="tasks-list-form--button">Submit</button>
        </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'Form',
    methods: {
        ...mapActions(['addTask']),
        submit(e) {
            e.preventDefault()
            const title = this.title
            const description = this.description
            this.addTask({title, description})
            this.close()
        }
    },
    props: {
        close: {
            type: Function
        }
    },
    data() {
        return {
            title: '',
            description: ''
        }
    }
}
</script>

<style lang="scss">
    .tasks-list-form {
        position: absolute;
        width: 250px;
        top: 65px;
        left: 55px;
        background-color: #ffffff;
        padding: 25px 15px;
        border-radius: 4px;
        box-shadow: 0 2px 5px rgba(170, 179, 188, 0.34);
        z-index: 40;

        &--filter {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background-color: rgba(0,0,0,.45);
            z-index: 30;
        }

        &--title {
            margin-top: 0;
            font-size: 22px;
            line-height: 22px;
            margin-bottom: 15px;
            color: #2e2e2e;
            text-align: center;
        }

        &--input {
            display: block;
            width: 100%;
            padding: 5px 15px;
            font-size: 18px;
            margin-bottom: 15px;
            border: 0;
            border-bottom: 1px solid rgba(151,151,151,.25);
        }

        &--area {
            display: block;
            width: 100%;
            padding: 5px 15px;
            font-size: 18px;
            resize: none;
            border: 0;
            border-bottom: 1px solid rgba(151,151,151,.25);
            margin-bottom: 15px;
        }

        &--button {
            display: block;
            margin: 0 auto;
            padding: 10px 15px;
            font-size: 18px;
            line-height: 18px;
            border: 0;
            background-color: #4956f5;
            color: #ffffff;
            border-radius: 4px;
            cursor: pointer;

            &:hover {
                background-color: lighten(#4956f5, 10);
            }
        }
    }
</style>


