import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { AdminComponent } from './admin/admin.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { EditAboutComponent } from './edit-about/edit-about.component';
import { notCompleteGuard } from './guards/not-complete.guard';
import { roleGuard } from './guards/role.guard';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
	{ path: '', redirectTo: 'Home', pathMatch: 'full' },
	{ path: 'Home', component: HomeComponent },
	{
		path: 'About',
		component: AboutComponent,
		canActivateChild: [roleGuard],
		children: [
			{
				path: 'EditAbout',
				component: EditAboutComponent,
			},
		],
	},
	{ path: 'AccessDenied', component: AccessDeniedComponent },
	{ path: 'Admin', component: AdminComponent, canActivate: [authGuard] },
	{
		path: 'Contact',
		component: ContactComponent,
		canDeactivate: [notCompleteGuard],
	},
	{ path: 'Products', component: ProductsComponent },
	{
		path: 'Offers',
		loadChildren: () =>
			import('./offers/offers.module').then((m) => m.OffersModule),
	},
];

@NgModule({
	declarations: [],
	imports: [CommonModule, RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
