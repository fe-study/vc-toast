<template>
    <div class="vc-toast-item-component"
        v-if="show"
        transition="toast"
        :class="{ 'stack': stack }"
        :style="{ 'top': cTop, 'right': cRight }"
    >
        <div class="toast-content">
            <i v-if="type === 'info' && !icon" :class="[ 'glyphicon', 'glyphicon-cloud', type ]"></i>
            <i v-if="type === 'success' && !icon" :class="[ 'glyphicon', 'glyphicon-ok', type ]"></i>
            <i v-if="type === 'danger' && !icon" :class="[ 'glyphicon', 'glyphicon-remove', type ]"></i>
            <i v-if="type === 'warning' && !icon" :class="[' glyphicon', 'glyphicon-off', type ]"></i>
            <i v-if="icon" :class="[ 'glyphicon', `glyphicon-${icon}` ]"></i>
            <span class="toast-message"><slot>{{ message }}</slot></span>
        </div>
    </div>
</template>

<style lang="less">
@blue: #2facf7;
@yellow: #fa0;
@red: #f50;
@green: #87d068;
.vc-toast-item-component {
    width: auto;
    white-space: nowrap;
    display: inline-block;
    vertical-align: middle;
    position: absolute;
    top: 20%;
    left: 50%;
    // 定位想用transform，但是和animation.css里的样式冲突，只能在.toast-content里right: 50%了

    // 堆叠模式下的样式重置
    &.stack {
        position: static;
        display: block!important;
        margin: 3px;

        .toast-content {
            right: 0;
        }
    }

    .toast-content {
        position: relative;
        right: 50%;
        padding: 7px 16px;
        border-radius: 6px;
        border: 1px solid #d9d9d9;
        box-shadow: 0 1px 8px hsla(0, 0%, 39%, .2);
        background: #fff;
        display: block;

        i,
        .toast-message {
            font-size: 12px;
            display: inline-block;
            vertical-align: middle;
        }
        i.info {
            color: @blue;
        }
        i.success {
            color: @green;
        }
        i.danger {
            color: @red;
        }
        i.warning {
            color: @yellow;
        }
    }
}
.toast-transition {
    display: inline-block;
}
.toast-enter {
    -webkit-animation: bounceInDown .3s;
    animation: bounceInDown .3s;
}


.toast-leave {
    -webkit-animation: fadeOutUp .3s;
    animation: fadeOutUp .3s;
}

@-webkit-keyframes bounceInDown {
  from, 60%, 75%, 90%, to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }

  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -3000px, 0);
    transform: translate3d(0, -3000px, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(0, 25px, 0);
    transform: translate3d(0, 25px, 0);
  }

  75% {
    -webkit-transform: translate3d(0, -10px, 0);
    transform: translate3d(0, -10px, 0);
  }

  90% {
    -webkit-transform: translate3d(0, -50px, 0);
    transform: translate3d(0, -50px, 0);
  }

  to {
    -webkit-transform: none;
    transform: none;
  }
}

@keyframes bounceInDown {
  from, 60%, 75%, 90%, to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }

  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -3000px, 0);
    transform: translate3d(0, -3000px, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(0, 25px, 0);
    transform: translate3d(0, 25px, 0);
  }

  75% {
    -webkit-transform: translate3d(0, -10px, 0);
    transform: translate3d(0, -10px, 0);
  }

  90% {
    -webkit-transform: translate3d(0, 5px, 0);
    transform: translate3d(0, 5px, 0);
  }

  to {
    -webkit-transform: none;
    transform: none;
  }
}

@-webkit-keyframes fadeOutUp {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
}

@keyframes fadeOutUp {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
}
</style>

<script>
const ToastItem = {
    name: 'vc-toast-item',
    props: {
        id: [Number, String],
        message: String,
        type: {
            type: String,
            default: 'info'
        },
        duration: {
            type: [Number, String],
            default: 2
        },
        icon: String
    },
    data () {
        return {
            stack: true,
            show: false,
            cTop: null,
            cRight: null
        }
    },
    created () {
        this.show = true
        this.cTop = this.$parent.cTop
        this.stack = this.$parent.stack
        let right = this.$parent.cRight
        if (this.stack) {
            this.cRight = right
        } else {
            if (right) {
                this.cRight = null
                console.warn('[vcToast warn]: prop `right` is stack mode only!')
            }
        }
    },
    watch: {
        show (val) {
            if (val) {
                if (this.duration) {
                    let find = false 
                    setTimeout(() => {
                        let ts = this.$parent.toasts
                        ts.forEach((t, index) => {
                            if (t._uuid === this.id) {
                                ts.splice(index, 1)
                                // NOTE: put this here to avoid TypeError: this.op is not a function
                                this.show = false 
                                find = true
                            }
                        })
                        if (!find) {
                            this.show = false
                        }
                    }, this.duration * 1000)
                }
            }
        },
        duration (val) {
            if (val > 10) {
                console.warn(`pay attention, the unit of duration is second, now ${this.duration} may be too...`)
            }
        }
    }
}

ToastItem.DEFAULT_DURATION = 2
ToastItem.DEFAULT_INFO_ICON = 'cloud'
export default ToastItem
</script>
