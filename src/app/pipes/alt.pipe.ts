import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'alt',
})
export class AltPipe implements PipeTransform {
  
	transform(src: string): string {
		const regExpForAlt = new RegExp(/\/\b\w+\./);
		let alt = src.match(regExpForAlt);

		if (alt) {
			return alt[0].slice(1, -1);
		} else {
			return '';
		}
	}
}
