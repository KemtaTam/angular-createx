import {
	HttpEvent,
	HttpHandler,
	HttpInterceptor,
	HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
	token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJUb2tlbiI6ImRvbid0IGZvcmdldCBwYXNzd29yZCJ9.lPGmnNmF8J0r5dtVQkDUBatUw6ssQYXu1qkci4j5SYY'

	constructor() {}

	intercept(
		req: HttpRequest<any>,
		next: HttpHandler
	): Observable<HttpEvent<any>> {
		req = req.clone({
			setHeaders: {
				'custom-study-token': 'perfect future is waiting for us',
				Authentication: `Bearer ${this.token}`,
			},
		});

		return next.handle(req);
	}
}
