import { CoursesService } from './../courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'courses', // css selector or customerize html markup
    template: `
        <h2>{{ title }}</h2>
        <h2>[textContent]="title"></h2>
        
        <img src="{{ imageUrl }}" />
        <img [src]="imageUrl" />
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