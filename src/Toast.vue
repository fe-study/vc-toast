<template>
    <div class="vc-toast-component" :class="{ 'stack': stack }" :style="{ 'top': cTop, 'right': cRight }">
        <template v-for="t in ts">
            <slot>
            <vc-toast-item
                :id="t._uuid"
                :message="t.message"
                :duration="t.duration"
                :type="t.type"
                :icon="t.icon"
            >
            </vc-toast-item>
            </slot>
        </template>
    </div>
</template>

<style>
.vc-toast-component {
    &.stack {
        position: absolute;
        top: 0;
        right: 0;
    }
}
</style>

<script>
import vcToastItem from './ToastItem.vue'

export default {
    name: 'vc-toast',
    props: {
        toasts: {
            type: Array,
            default () {
                return []
            }
        },
        stack: {
            type: Boolean,
            default: false 
        },
        top: String,
        right: String,
        duration: [Number, String] // 全局设置duration，优先级大于子元素默认duraiton，小于快捷函数调用传入
    },
    components: {
        vcToastItem
    },
    computed: {
        ts () {
            return this.toasts.map(toast => {
                // KEY: 避免重置导致追踪失败
                if (!toast['_uuid']) {
                    toast['_uuid'] = Date.now()
                }
                return toast
            })
        },
        cTop () {
            if (this.top == null || this.top === '') {
                return null
            }
            if (!isNaN(this.top)) {
                return `${this.top}px`
            }
            return this.top
        },
        cRight () {
            if (this.right == null || this.right === '') {
                return null
            }
            if (!isNaN(this.right)) {
                return `${this.right}px`
            }
            return this.right
        }
    },
    ready () {
        this.info = (...args) => {
            args.unshift('info')
            this.showToast(args)
        } 
        this.success = (...args) => {
            args.unshift('success')
            this.showToast(args)
        } 
        this.warning = (...args) => {
            args.unshift('warning')
            this.showToast(args)
        } 
        this.danger = (...args) => {
            args.unshift('danger')
            this.showToast(args)
        } 
        // export to window
        window.t = this
        window.Toast = this
    },
    methods: {
        // showToast (type, message, duration = DEFAULT_DURATION, icon) {
        showToast (options) {
            let [
                type,
                message,
                duration,
                icon
            ] = options 
            if (isNaN(duration)) {
                [icon, duration] = [duration, icon]
            }
            let toast = { type, message, duration, icon }
            this.toasts.push(toast)
        }
    }
}
</script>
