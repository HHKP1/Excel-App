import {createTable} from '@/components/table/table.template.js'
import {ExcelComponent} from '@core/ExcelComponent.js'

export class Table extends ExcelComponent {
	static className = 'excel__table'

	toHTML() {
		return createTable()
	}
}