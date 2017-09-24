import { CoursesService } from './../courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'courses', // css selector or customerize html markup
    template: `
        <h2>{{ title }}</h2>
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>
    `

})

export class CoursesCompoent {
    title = "List of courses";
    courses;

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }
    
}