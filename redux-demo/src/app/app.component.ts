import { IAppState } from './store';
import { NgRedux, select } from '@angular-redux/store';
import { Component } from '@angular/core';
import { INCREMENT } from './actions';
import { Map } from 'immutable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  @select(s => s.get('counter')) count;

  constructor(private ngRedux: NgRedux<Map<string, any>>) {
  }

  increment() {
    this.ngRedux.dispatch({ type: INCREMENT });
  }
}
