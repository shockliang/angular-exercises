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
  coursesRef: AngularFireList<any>;
  courses$: Observable<any[]>;

  constructor(private db: AngularFireDatabase) {
    this.coursesRef = db.list('courses');
    this.courses$ = this.coursesRef.snapshotChanges()
      .map(changes => {
        return changes.map(c => ({ key: c.payload.key, value: c.payload.val() }));
      });

  }

  add(course: HTMLInputElement) {
    this.coursesRef.push(course.value);
    course.value = '';
  }

  update(course) {
    console.log(course);
    this.coursesRef.set(course.key, course.value + ' UPDATED');
  }

  delete(course) {
    this.coursesRef.remove(course.key)
      .then(x => console.log('Delete'));
  }
}
