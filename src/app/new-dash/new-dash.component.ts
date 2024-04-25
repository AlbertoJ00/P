import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-dash',
  templateUrl: './new-dash.component.html',
  styleUrls: ['./new-dash.component.css']
})
export class NewDashComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Prueba', cols: 2, rows: 1 },
        { title: 'Prueba', cols: 1, rows: 1 },
        { title: 'Prueba', cols: 1, rows: 2 },
        { title: 'Prueba', cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver, private router : Router ) {}

  userModule(): void {
    this.router.navigate(['/user']);
}
}