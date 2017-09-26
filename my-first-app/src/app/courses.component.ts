import { Component } from '@angular/core';

@Component({
    selector: 'courses', // css selector or customerize html markup
    template: `
        <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
    `
})

export class CoursesCompoent {
    email = "abc@abc.com"

    onKeyUp() {
        console.log(this.email);
    }
}