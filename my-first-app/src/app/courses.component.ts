import { CoursesService } from './../courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'courses', // css selector or customerize html markup
    template: `
        <div (click)="onDivClicked()">
            <button (click)="onSave($event)">Save</button>
        </div>
    `
})

export class CoursesCompoent {
    
    onDivClicked() {
        console.log('Div was clicked');
    }

    onSave($event) {
        console.log('Button was clicked', $event);
        $event.stopPropagation(); // Stop event bubbling
    }
    
}