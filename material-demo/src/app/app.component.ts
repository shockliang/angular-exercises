import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoading = false;

  constructor() {
    this.isLoading = true;
    this.getCourses()
      .subscribe(x => this.isLoading = false);
  }

  getCourses() {
    return Observable.timer(5000);
  }
}
