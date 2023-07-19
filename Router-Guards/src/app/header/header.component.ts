import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
	role: string = '';

	constructor(private router: Router, private authService: AuthService) {}

	ngOnInit(): void {
		this.role = this.authService.userRole;
	}

	goToAdmin() {
		this.router.navigate(['Admin']);
	}
	goToContact() {
		this.router.navigate(['Contact']);
	}
	goToOffers() {
		this.router.navigate(['Offers']);
	}
	goToAbout() {
		this.router.navigate(['About']);
	}
	goToProducts() {
		this.router.navigate(['Products']);
	}

	goToHome() {
		this.router.navigate(['Home']);
	}

	switchRole() {
		this.authService.userRole = this.role;
		this.role = this.authService.userRole;
	}
}
