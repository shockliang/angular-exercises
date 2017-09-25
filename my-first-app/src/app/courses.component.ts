import { CoursesService } from './../courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'courses', // css selector or customerize html markup
    template: `
        <img [src]="imageUrl" />
        <table>
            <tr>
                <td [attr.colspan]="colSpan"></td>
            </tr>
        </table>
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