import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})

export class CourseFormComponent {
  category = [
    { id: 0, name: "Development"},
    { id: 1, name: "Art"}, 
    { id: 2, name: "Languages"}
  ];
}
