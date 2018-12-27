<template>
    <div class="card-modal">
        <button class="card-modal--exit" @click="cancel">&times;</button>
        <form class="card-modal-wrap" @submit="submit">
            <h4 class="card-modal--title">{{ task.title }}</h4>
            <p class="card-modal--desc">{{ task.description }}</p>
            <p class="card-modal--desc">In {{ task.status }}</p>
            <p class="card-modal--desc text-center">Enter the time limit:
            <input class="card-modal--input" type="time" @input="input" :value="estimation"></p>
            <button type="submit" class="card-modal--finish">Submit</button>
        </form>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Tag from './Tag.vue'

export default {
    name: 'EstimateModal',
    components: {
        Tag
    },
    props: {
        dragging: {
            type: Boolean,
            default: true
        },
        cancel: {
            type: Function
        },
        finish: {
            type: Function
        },
        task: {
            type: Object,
            default: () => {}
        },
        toNext: {
            type: Function
        }
    },
    computed: mapGetters(['hardTags', 'softTags']),
    data() {
        return {
            estimation: '00:00'
        }
    },
    methods: {
        ...mapActions(['taskAddEstimation']),
        input(e) {
            this.estimation = e.target.value
        },
        submit(event) {
            event.preventDefault()
            const uid = this.task.uid
            const parsed = this.estimation.split(':')
            const hours = parseInt(parsed[0])
            const minutes = parseFloat((parseInt(parsed[1]) / 60).toFixed(1))
            const estimation = hours + minutes
            this.taskAddEstimation({uid, estimation})
            this.cancel()
        }
    }
}
</script>

<style lang="scss">
    .card-modal {
        &--input {
            border: 0;
            background: 0;
            border-bottom: 1px solid rgba(151,151,151,.75);
            margin-left: 0.5em;
            font-size: 18px;

            &:focus {
                outline: 0;
            }
        }
    }
</style>


