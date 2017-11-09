import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses: any[];

  constructor(db: AngularFireDatabase) {
    // AngularFire2 4.0 version
    // db.list('courses')
    //   .subscribe(courses => {
    //     this.courses = courses;
    //     console.log(this.courses);
    //   })
    
    // AngularFire2 5.0 version
    db.list('courses')
      .valueChanges()
      .subscribe(courses => {
        this.courses = courses;
        console.log(this.courses);
      });
  }
}
