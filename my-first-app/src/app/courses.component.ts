import { CoursesService } from './../courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'courses', // css selector or customerize html markup
    template: `
        <input #email (keyup.enter)="onKeyUp(email.value)" />
    `
})

export class CoursesCompoent {
    onKeyUp(email) {
        console.log(email);
    }
}