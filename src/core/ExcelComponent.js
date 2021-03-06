import {DomListener} from '@core/DomListener.js'

export class ExcelComponent extends DomListener {
	constructor($root, options = {}) {
		super($root, options.listeners)
		this.name = options.name || ''
	}
	// return template components
	toHTML() {
		return ''
	}
	init() {
		this.initDOMListeners()
	}
	destroy() {
		this.removeDOMListeners()
	}
}