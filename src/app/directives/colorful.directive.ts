import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
	selector: '[appColorful]',
})
export class ColorfulDirective {
	constructor(private el: ElementRef, private r: Renderer2) {}

	@HostListener('mouseenter', ['$event.target']) onHover(): void {
		this.r.setStyle(this.el.nativeElement, 'filter', 'grayscale(0)');
	}
	@HostListener('mouseleave', ['$event.target']) onBlur(): void {
		this.r.setStyle(this.el.nativeElement, 'filter', 'grayscale(1)');
	}
}
