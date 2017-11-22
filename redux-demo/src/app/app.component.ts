import { IAppState } from './store';
import { NgRedux } from '@angular-redux/store';
import { Component } from '@angular/core';
import { INCREMENT } from './actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  counter = 0;

  constructor(private ngRedux: NgRedux<IAppState>) {

  }

  increment() {
    this.ngRedux.dispatch({ type: INCREMENT });
  }
}
