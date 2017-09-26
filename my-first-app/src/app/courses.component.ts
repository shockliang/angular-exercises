import { CoursesService } from './../courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'courses', // css selector or customerize html markup
    template: `
        <input (keyup.enter)="onKeyUp()" />
    `
})

export class CoursesCompoent {
    onKeyUp() {
        console.log("Enter was pressed");
    }
}