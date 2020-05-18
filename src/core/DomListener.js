import {capitalize} from '@core/utils.js'

export class DomListener {
	constructor($root, listeners = []) {
		if (!$root) {
			throw new Error('No is provided $root  of DomListener')
		}
		this.$root = $root
		this.listeners = listeners
	}
	initDOMListeners() {
		this.listeners.forEach(listener => {
			const method = getMethodName(listener)
			const name = this.name || ''
			if (!this[method]) {
				throw new Error(
					`Method ${method} is not implementrd in ${name} Component`
				)
			}
			// console.log(method)
			this[method] = this[method].bind(this)
			this.$root.on(listener, this[method])
		})
	}
	removeDOMListeners() {
		this.listeners.forEach(listener => {
			const method = getMethodName(listener)
				this.$root.off(listener, this[method])
				console.log(method)
			// console.log(method)
		})
	}
}

function getMethodName(eventName) {
	return 'on' + capitalize(eventName)
}