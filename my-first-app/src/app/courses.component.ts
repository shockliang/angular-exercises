import { Component } from '@angular/core';

@Component({
    selector: 'courses', // css selector or customerize html markup
    template: '<h2>{{ getTitle() }}</h2>'

})

export class CoursesCompoent {
    title = "List of courses";

    getTitle() {
        return this.title;
    }
}