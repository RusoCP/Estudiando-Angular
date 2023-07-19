import { CanActivateChildFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const roleGuard: CanActivateChildFn = (childRoute, state) => {
	const authService = inject(AuthService);
	if (authService.userRole !== 'admin') {
		alert("You don't have access");
		return false;
	}
	return true;
};
