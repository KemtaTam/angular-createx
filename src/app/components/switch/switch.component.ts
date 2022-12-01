import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Component, Provider, forwardRef } from '@angular/core';

const VALUE_ACCESSOR: Provider = {
	provide: NG_VALUE_ACCESSOR,
	useExisting: forwardRef(() => SwitchComponent),
	multi: true,
};

@Component({
	selector: 'app-switch',
	templateUrl: './switch.component.html',
	styleUrls: ['./switch.component.scss'],
	providers: [VALUE_ACCESSOR],
})
export class SwitchComponent implements ControlValueAccessor {
	state = 'off';

	private onChange: (value: any) => void = (value: any) => {};

	setState(state: string): void {
		this.state = state;
		this.onChange(this.state);
	}

	writeValue(state: string): void {
		this.state = state;
	}
	registerOnChange(fn: any): void {
		this.onChange = fn;
	}
	registerOnTouched(fn: any): void {}
	setDisabledState?(isDisabled: boolean): void {}
}
