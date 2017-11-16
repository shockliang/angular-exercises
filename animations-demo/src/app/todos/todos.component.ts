import { trigger, state, style, transition, animate, keyframes, useAnimation, query, animateChild } from "@angular/animations";
import { Component } from '@angular/core';
import { slide, bounceOutLeftAnimation, fadeInAnimation } from 'app/animations';

@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  animations: [
    trigger('todosAnimation', [
      transition(':enter', [
        query('h1', [
          style({ transform: 'translateY(-20px)' }),
          animate(500)
        ]),
        query('@todoAnimation', animateChild())
      ])
    ]),

    trigger('todoAnimation', [
      transition(':enter', [
        useAnimation(fadeInAnimation, {
          params: {
            duration: '500ms'
          }
        })
      ]),
      transition(':leave', [
        style({ backgroundColor: 'red' }),
        animate(1000),
        useAnimation(bounceOutLeftAnimation)
      ]),
    ])
  ]
})

export class TodosComponent {
  items: any[] = [
    'Wash the dishes',
    'Call the accountant',
    'Apply for a car insurance'];

  addItem(input: HTMLInputElement) {
    this.items.splice(0, 0, input.value);
    input.value = '';
  }

  removeItem(item) {
    let index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }

  animationStarted($event) {
    console.log($event);
  }

  animationDone($event) {
    console.log($event);
  }
}
