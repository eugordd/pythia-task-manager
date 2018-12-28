<template>
  <div class="tasks__card" :class="{ sprint: stage === 2, process: stage === 3 }">
    <span class="tasks__card-title">{{ task.title }}</span>
    <span class="tasks__card-description">{{ task.description }}</span>
    <div v-if="stage === 2">
        <div>
            <Tag v-for="tag in task.tags" :key="tag.uid" :tag="tag" :disabled="true" />
        </div>
        <div class="tasks__card-people">
            <div 
                class="tasks__card-people-dev" 
                v-if="task.estimations" 
                v-for="dev in task.estimations.users" 
                :key="dev.uid" 
                v-tooltip="getDevInfo(dev)">
                <div class="tasks__card-people-dev--est">{{ parseEstimation(dev.estimation) }}</div>
            </div>
            <div class="tasks__card-people--add" @click="addEstimation"></div>
        </div>
         <div v-if="task.estimations.avg">
            <span class="tasks__card-time">Ср. оцен. время - {{ parseEstimation(task.estimations.avg) }}</span><br>
            <span class="tasks__card-time">Ср. прогноз. время {{ parseEstimation(task.estimations.pythia_avg) }}</span>
        </div>
    </div>
    <div v-else-if="stage === 3">
        <div>
            <Tag v-for="tag in task.tags" :key="tag.uid" :tag="tag" :disabled="true" />
        </div>
        <div class="tasks__card-people flex">
            <div class="tasks__card-people-dev"></div>
            <span class="tasks__card-people-dev--name">{{ task.developer.username }}</span>
        </div>
    </div>
    <div v-else-if="stage === 4">
        <div>
            <Tag v-for="tag in task.tags" :key="tag.uid" :tag="tag" :disabled="true" />
        </div>
        <div class="tasks__card-people flex">
            <div class="tasks__card-people-dev"></div>
            <span class="tasks__card-people-dev--name">{{ task.developer.username }}</span>
        </div>
    </div>
    <button
      class="tasks__card-button"
      v-if="stage !== 4"
      @click="next()"
      :disabled="!task.next_step_allowed"
    ><ArrowSvg /></button>
    <Modal 
        v-if="dragging && stage === 1" 
        :dragging="dragging" 
        :cancel="cancelDragging" 
        :task="task" 
        :finish="dragBacklogSprint"
        :toNext="toNext"
    />
    <EstimateModal 
        v-if="estimating && stage === 2" 
        :dragging="estimating" 
        :cancel="cancelDragging" 
        :task="task" 
        :finish="dragBacklogSprint"
        :toNext="toNext"
    />
    <EstimateModal
        :after="true" 
        v-if="dragging && stage === 3" 
        :dragging="estimating" 
        :cancel="cancelDragging" 
        :task="task" 
        :finish="dragBacklogSprint"
        :toNext="toNext"
    />
  </div>
</template>

<script>
import Modal from "../Modal/Modal.vue";
import EstimateModal from "../Modal/EstimateModal.vue";
import Tag from "../Modal/Tag.vue";

import ArrowSvg from '@/assets/svg/arrow.svg'

export default {
  name: 'Card',
  props: {
      task: {
          type: Object,
          default: () => {}
      },
      toNext: {
          type: Function
      },
      stage: {
          type: Number,
          default: 1
      }
  },
  components: {
    Modal,
    Tag,
    EstimateModal,
    ArrowSvg
  },
  data() {
    return {
      dragging: false,
      estimating: false
    };
  },
  methods: {
    next() {
      switch(this.stage) {
          case 1: return this.dragBacklogSprint()
          case 2: return this.toNext(this.task.uid)
          case 3: return this.dragBacklogSprint()
      }
    },
    dragBacklogSprint() {
      this.dragging = true
    },
    cancelDragging() {
        this.dragging = false
        this.estimating = false
    },
    addEstimation() {
        this.estimating = true
    },
    parseEstimation(est) {
        const hours = Math.floor(est)
        const minutes = ((est % 1) * 60).toFixed(0)
        return `${ hours }:${minutes.toString().length === 2 ? minutes : '0' + minutes }`
    },
    getDevInfo(dev) {
        return `
            <span>Оценка пользователя — ${ this.parseEstimation(dev.estimation) }</span><br>
            <span>Прогнозируемое время — ${ this.parseEstimation(dev.pythia_estimation) }</span>
        `
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
            
            &.sprint, &.process {
                position: relative;

                &::before {
                    content: '';
                    top: 0;
                    left: 0;
                    position: absolute;
                    width: 6px;
                    height: 100%;
                    border-top-left-radius: 5px;
                    border-bottom-left-radius: 5px;
                }
            }

            &-people {
                &.flex {
                    display: flex;
                    align-items: center;
                    margin-top: 10px;
                }

                &--add {
                    width: 28px;
                    height: 28px;
                    border: 1px solid rgba(170, 179, 188, 0.31);
                    border-radius: 50%;
                    background-image: url('/images/svg/plus.svg');
                    background-repeat: no-repeat;
                    background-size: 8px;
                    background-position: center;
                    cursor: pointer;
                    display: inline-block;
                }

                &-dev {
                    width: 28px;
                    height: 28px;
                    background-color: #000;
                    cursor: pointer;
                    border-radius: 50%;
                    margin-right: 7px;
                    display: inline-block;
                    position: relative;

                    &--name {
                        font-size: 16px;
                        line-height: 18px;
                        margin-top: 0.1em;
                    }

                    &--est {
                        position: absolute;
                        bottom: -2px;
                        right: -6px;
                        // width: 17px;
                        // height: 11px;
                        padding: 1px 2px;
                        border: 2px solid #fff;
                        border-radius: 5px;
                        font-weight: 900;
                        font-size: 10px;
                        color: #ffffff;
                        background-color: #b3becb;
                    }
                }
            }

            &-title {
                color: #2E2E2E;
                font-weight: 500;
                font-size: 14px;
                margin-bottom: 7px;
            }

            &-description {
                color: #AAB3BC;
                font-size: 12px;
                margin-bottom: 7px;
            }

            &-button {
                color: #fff;
                background: #51C75B;
                border-radius: 2px;
                padding: 4px 12px;
                align-self: flex-end;
                border: 0;
                cursor: pointer;

                &:focus {
                    outline: 0;
                }

                &:disabled {
                    background: #AAB3BC;
                    cursor: not-allowed;
                }
            }
        }
    }

</style>


