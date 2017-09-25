import { CoursesService } from './../courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'courses', // css selector or customerize html markup
    template: `
        <button class="btn btn-primary">Save</button>
    `

})

export class CoursesCompoent {
    title = "List of courses";
    imageUrl = "http://lorempixel.com/400/200";
    courses;

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
        
    }
    
}