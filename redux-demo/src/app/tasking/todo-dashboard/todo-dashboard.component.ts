import { IAppState } from './../../store';
import { Component } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store'; 
import { ITaskingState } from '../store'; 
import { CLEAR_TODOS } from '../actions'; 

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.css']
})
export class TodoDashboardComponent {
  @select(s => s.tasking.todos) todos; 
  @select(s => s.tasking.lastUpdate) lastUpdate; 
  
  constructor(private ngRedux: NgRedux<IAppState>) {
  }

  clearTodos() {
    this.ngRedux.dispatch({ type: CLEAR_TODOS });
  }
}
