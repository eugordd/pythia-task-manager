<template>
    <button 
        type="button"
        class="tag"
        :class="{'tag_selected': isSelected}"
        @click="toggleTag">
        {{ tag.title }} 
    </button>
</template>

<script>
    export default {
        name: 'Tag',
        props: {
            tag: {
                type: Object,
                default: () => {}
            },
            toggle: {
                type: Function
            },
            selected: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                isSelected: this.selected
            }
        },
        methods: {
            toggleTag() {
                this.isSelected = !this.isSelected
                this.toggle(this.isSelected, this.tag)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .tag {
        padding: 5px 10px;
        margin: 5px;
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

        &:not(:last-child) {
            margin-right: 10px;
        }

        &_selected {
            background-color: #4956F5;
            color: #ffffff;
        }
    }
</style>


