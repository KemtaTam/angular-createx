import { Component, OnInit } from '@angular/core';
import {
	AbstractControl,
	FormArray,
	FormBuilder,
	FormControl,
	FormGroup,
	Validators,
} from '@angular/forms';

@Component({
	selector: 'app-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
	form!: FormGroup;

	/* formBuilder */
	constructor(private formBuilder: FormBuilder) {
		this.form = formBuilder.group({
			city: [''],
			street: [''],
			house: [''],

			numbers: formBuilder.array([
				['', [Validators.required, Validators.pattern('[0-9]{10}')]],
			]),
		});
	}

	/* FormGroup */
	ngOnInit() {
		/* this.form = new FormGroup({
			city: new FormControl(''),
			street: new FormControl(''),
			house: new FormControl(''),

			numbers: new FormArray([]),
		}); */
	}

	addNumbers(): void {
		/* const V = Validators;
		const control = new FormControl('', [
			V.required,
			V.pattern('[0-9]{10}'),
		]); */

		//(<FormArray>this.form.get('numbers')).push(control);

		(<FormArray>this.form.controls['numbers']).push(
			['', [Validators.required, Validators.pattern('[0-9]{10}')]]
		);
	}

	getControls(): AbstractControl<any, any>[] {
		return (this.form.get('numbers') as FormArray).controls;
	}

	submit(): void {
		this.form.valid && console.log('form submitted', this.form);
	}
}
