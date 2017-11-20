import { EditCourseComponent } from './edit-course/edit-course.component';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private dialog: MatDialog) {
    
  }

  openDialog() {
    this.dialog.open(EditCourseComponent)
      .afterClosed()
      .subscribe(result=>console.log(result));
  }
}
