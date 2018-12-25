<template>
    <button type="button" ref="tag" class="card-modal-tag" @click="toggleTag">
        {{tag.title}}
    </button>
</template>

<script>
export default {
    name: 'Tag',
    data() {
        return {
            selected: false
        }
    },
    props: {
        tag: {
            type: Object,
            default: () => {}
        },
        toggle: {
            type: Function
        }
    },
    methods: {
        select() {
            this.$refs.tag.classList.add('selected')
            this.selected = true
            this.toggle(this.selected, this.tag)
        },
        deselect() {
            this.$refs.tag.classList.remove('selected')
            this.selected = false
            this.toggle(this.selected, this.tag)
        },
        toggleTag() {
            this.selected ? this.deselect() : this.select()
        }
    }
}
</script>

<style lang="scss" scoped>
    .card-modal-tag {
        padding: 5px 10px;
        background: 0;
        border: 0;
        border-radius: 2px;
        background-color: #f1f3f5;
        text-transform: uppercase;
        display: inline-block;
        vertical-align: top;
        font-size: 14px;
        cursor: pointer;

        &:hover {
            background-color: lighten(#4956F5, 20);
        }

        &:focus {
            outline: 0;
        }

        &:first-child {
            margin-bottom: 10px;
        }

        &:not(:last-child) {
            margin-right: 10px;
        }

        &.selected {
            background-color: #4956F5;
            color: #ffffff;
        }
    }
</style>


