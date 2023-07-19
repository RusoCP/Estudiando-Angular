import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	private _userRole: string = 'user';

	constructor() {}

	get userRole() {
		return this._userRole;
	}

	set userRole(role: string) {
		if (role === 'admin') {
			this._userRole = 'user';
		} else {
			this._userRole = 'admin';
		}
		console.log(this.userRole);
	}
}
