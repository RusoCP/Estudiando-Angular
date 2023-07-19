import { Component } from '@angular/core';
import {
	Observable,
	filter,
	interval,
	map,
	reduce,
	scan,
	take,
	tap,
} from 'rxjs';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent {
	numero: number = 0;

	startObs() {
		const obs: Observable<number> = interval(1000).pipe(
			take(5),
			tap((i) => console.log(i))
		);
		// obs.subscribe((data) => {
		// 	this.numero = data;
		// });
		obs.subscribe();
	}

	startObs2() {
		const obs: Observable<number> = interval(1000).pipe(
			take(10),
			map((i) => i * 2),
			filter((i) => i % 2 === 0)
		);

		obs.subscribe({
			next: (i) => (this.numero = i),
			//complete: () => (this.numero = 0),
		});
	}

	startReducer() {
		const obs: Observable<number> = interval(1000).pipe(take(5));
		obs
			.pipe(reduce((total, i) => total + i, 0))
			.subscribe((total) => (this.numero = total));
	}

	startScan() {
		const obs: Observable<number> = interval(1000).pipe(take(5));
		obs
			.pipe(scan((total, i) => total + i, 0))
			.subscribe((total) => (this.numero = total));
	}
}
