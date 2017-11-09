import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses$;

  constructor(db: AngularFireDatabase) {
    this.courses$ = db.list('courses').valueChanges();
  }
}
