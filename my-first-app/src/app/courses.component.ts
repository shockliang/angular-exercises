import { CoursesService } from './../courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'courses', // css selector or customerize html markup
    template: `
        <button [style.backgroundColor]="isActive ? 'blue' : 'white' ">Save</button>
    `
})

export class CoursesCompoent {
    isActive = true;
    
}