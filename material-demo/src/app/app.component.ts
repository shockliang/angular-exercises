import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  progress = 0;
  timer;

  constructor() {
    this.timer = setInterval(() => {
      this.progress++;
      if (this.progress == 100) clearInterval(this.timer)
    }, 20);
  }
}
