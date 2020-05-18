import {ExcelComponent} from '@core/ExcelComponent.js'


export class Header extends ExcelComponent {
	static className = 'excel__header'

	toHTML() {
		return `
            <input type="text" class="input" value="New Table"/>
            <div class="button__container">
                <div class="button">
                    <i class="material-icons">delete</i>
                </div>
                <div class="button">
                    <i class="material-icons">exit_to_app</i>
                </div>
            </div>
		`
	}
}