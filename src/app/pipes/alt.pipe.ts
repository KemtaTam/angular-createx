import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'getAltFromSrc',
})
export class AltPipe implements PipeTransform {
	transform(src: string): string {
		const regExpForAlt = new RegExp(/\/\b\w+\./);
		let alt = src.match(regExpForAlt);

		return alt ? alt[0].slice(1, -1) : '';
	}
}
