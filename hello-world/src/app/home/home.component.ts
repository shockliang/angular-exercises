import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  archives = [
    { year: 2017, month: 9 },
    { year: 2017, month: 10 },
    { year: 2017, month: 11 },
  ]
  constructor() { }

  ngOnInit() {
  }

}
