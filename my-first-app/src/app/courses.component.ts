import { CoursesService } from './../courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'courses', // css selector or customerize html markup
    template: `
        <button class="btn btn-primary" [class.active]="isActive">Save</button>
    `

})

export class CoursesCompoent {
    title = "List of courses";
    isActive = true;
    courses;

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
        
    }
    
}