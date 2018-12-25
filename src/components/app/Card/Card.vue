<template>
  <div class="tasks__card">
    <span class="tasks__card-title">{{ task.title }}</span>
    <span class="tasks__card-description">{{ task.description }}</span>
    <button
      class="tasks__card-button"
      @click="dragBacklogSprint"
      :disabled="!task.next_step_allowed"
    >→</button>
    <Modal 
        v-if="dragging" 
        :dragging="dragging" 
        :cancel="cancelDragging" 
        :task="task" 
        :finish="dragBacklogSprint"
        :toNext="toNext"
    />
  </div>
</template>

<script>
import Modal from "../Modal/Modal.vue";

export default {
  name: "Card",
  props: {
      task: {
          type: Object,
          default: () => {}
      },
      toNext: {
          type: Function
      }
  },
  components: {
    Modal
  },
  data() {
    return {
      dragging: false
    };
  },
  methods: {
    dragBacklogSprint() {
      this.dragging = true
    },
    cancelDragging() {
        this.dragging = false
    }
  }
};
</script>

<style lang="scss">
    .tasks {
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


