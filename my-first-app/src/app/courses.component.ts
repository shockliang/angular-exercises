import { Component } from '@angular/core';

@Component({
    selector: 'courses', // css selector or customerize html markup
    template: `
        {{ course.title | uppercase | lowercase}} <br/>
        {{ course.students | number }} <br/>
        {{ course.rating | number:'2.1-1'}} <br/>
        {{ course.price | currency:'AUD':true:'3.1-1' }} <br/>
        {{ course.releaseDate | date:'shortDate' }}
    `
})

export class CoursesCompoent {
    course = {
        title: "The Complete Angular Course",
        rating: 4.9745,
        students: 30123,
        price: 190.95,
        releaseDate: new Date(2017, 9, 26)
    }
}