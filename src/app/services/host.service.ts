import { Injectable, Inject } from '@angular/core';
import { WINDOW } from '../providers/window.provider';

@Injectable()
export class HostService {
	readonly host: string = this.window.location.host

	constructor(@Inject(WINDOW) private window: Window) {}
}
