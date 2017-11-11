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

  constructor(db: AngularFireDatabase) {
    this.coursesRef = db.list('courses');
    this.courses$ = this.coursesRef.valueChanges();

  }

  add(course: HTMLInputElement) {
    // this.coursesRef.push(course.value);
    this.coursesRef.push({
      name: course.value,
      price: 150,
      isLive: true,
      sections: [
        { title: 'Components' },
        { title: 'Directives' },
        { title: 'Template' },
      ]
    })
    course.value = '';
  }
}
