import Vue from 'vue'
import vcToast from '../src'

new Vue({
	el: '#app',
	data () {
		return {
            bools: {
                true: true,
                false: false
            },
            message: 'toast message',
            duration: 2,
            type: 'info',
            icon: 'ok',
            toasts: [],
            top: null,
            right: null,
            stack: false,
            classname: 'toast-position'
        }
	},
    methods: {
        showMeTenSeconds () {
            this.duration = 10
            this.push()
        },
        toggleMode () {
            this.stack = !this.stack
        },
        success () {
            this.type = 'success'
            this.duration = 2
            this.push()
        },
        danger () {
            this.type = 'danger'
            this.duration = 2
            this.push()
        },
        info () {
            this.type = 'info'
            this.duration = 2
            this.push()
        },
        warning () {
            this.type = 'warning'
            this.duration = 2
            this.push()
        },
        push () {
            let index = this.toasts.length
            this.toasts.push({
                duration: this.duration,
                message: `msg: ${index}: ${this.message}`,
                type: this.type
            })
        }
    },
	components: {
        vcToast
	}
})
