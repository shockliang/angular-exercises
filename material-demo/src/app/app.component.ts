import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  categories = [
    { name: 'Beginer' },
    { name: 'Intermediate' },
    { name: 'Advanced' },
  ];

  selectCategory(category) {
    this.categories
      .filter(c => c != category)
      .forEach(c => c['selected'] = false);
      
    category.selected = !category.selected;
  }
}
