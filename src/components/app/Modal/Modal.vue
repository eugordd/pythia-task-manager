<template>
    <div class="card-modal">
        <button class="card-modal--exit" @click="cancel">&times;</button>
        <div class="card-modal-wrap">
            <h4 class="card-modal--title">{{ task.title }}</h4>
            <p class="card-modal--desc">{{ task.description }}</p>
            <p class="card-modal--desc">In {{ task.status }}</p>
            <p class="card-modal--desc text-center">Choose at least one tag from the list:</p>
            <div class="card-modal--tags">
                <Tag v-for="tag in hardTags" :key="tag.uid" :tag="tag" :toggle="select" />
            </div>
            <p class="card-modal--desc text-center">Choose additional tags:</p>
            <div class="card-modal--tags">
                <Tag v-for="tag in softTags" :key="tag.uid" :tag="tag" :toggle="select" />
            </div>
            <button type="button" class="card-modal--finish" @click="submit">Finish</button>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Tag from './Tag.vue'

export default {
    name: 'Modal',
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
            selected: []
        }
    },
    methods: {
        ...mapActions(['getHardTags', 'getSoftTags']),
        select(isSelected, tag) {
            let index = this.selected.indexOf(tag)
            if (isSelected) {
                index === -1 && this.selected.push(tag)
            } else {
                index !== -1 && this.selected.splice(index, 1)
            }
        },
        submit() {
            this.toNext(this.task.uid, this.selected)
        }
    },
    created() {
        this.getHardTags()
        this.getSoftTags()
    }
}
</script>

<style lang="scss">
    .card-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(52, 52, 52, .75);
        z-index: 30;
        display: flex;
        justify-content: center;
        align-items: center;

        &--title {
            font-size: 22px;
            line-height: 24px;
            margin-bottom: 30px;
            color: #2e2e2e;
            margin-top: 0;
            font-weight: 500;
        }

        &--desc {
            font-size: 18px;
            line-height: 18px;
            color: #4d4d4d;
            font-weight: 300;
            margin-bottom: 15px;
        }

        &--exit {
            font-size: 48px;
            line-height: 48px;
            background: 0;
            border: 0;
            position: absolute;
            top: 100px;
            right: 50px;
            color: #ffffff;
            cursor: pointer;

            &:focus {
                outline: 0;
            }
        }

        &--finish {
            color: #ffffff;
            background-color: #4956f5;
            font-size: 22px;
            line-height: 22px;
            border-radius: 4px;
            border: 0;
            display: block;
            padding: 10px 25px;
            margin: 0 auto;
            cursor: pointer;

            &:hover {
                background-color: lighten(#4956F5, 5);
            }

            &:focus {
                outline: 0;
            }
        }

        &--tags {
            font-size: 0;
            text-align: center;
            margin-bottom: 30px;
        }

        &-wrap {
            background-color: #ffffff;
            max-width: 540px;
            border-radius: 4px;
            width: 100%;
            margin: 0 auto;
            padding: 20px 25px;
        }
    }
</style>


