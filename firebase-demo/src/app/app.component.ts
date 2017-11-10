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
  course$;
  author$;

  constructor(db: AngularFireDatabase) {
    this.courses$ = db.list('courses').valueChanges();
    this.course$ = db.object('/courses/1')
      .snapshotChanges()
      .map(action => {
        const $key = action.payload.key;
        const data = action.payload.toJSON();
        return data;
      });
    this.author$ = db.object('/authors/1').snapshotChanges();
  }
}
