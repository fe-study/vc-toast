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

const { DEFAULT_DURATION, DEFAULT_INFO_ICON } = vcToastItem

const Toast = {
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
        right: String
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
            console.log(args)
            this.showToast(args)
        } 
        this.success = (...args) => {
            args.unshift('success')
            this.showToast(args[0], args[1], args[2], args[3])
        } 
        this.warning = (...args) => {
            args.unshift('warning')
            this.showToast(args[0], args[1], args[2], args[3])
        } 
        this.danger = (...args) => {
            args.unshift('danger')
            this.showToast(args[0], args[1], args[2], args[3])
        } 
        // export to window
        window.vcToast = this
    },
    methods: {
        // showToast (type, message, duration = DEFAULT_DURATION, icon) {
        showToast (options) {
            let [
                type,
                message,
                duration = DEFAULT_DURATION,
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

export default Toast 
</script>
