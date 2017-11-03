import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private route: Router) { }

  submit() {
    this.route.navigate(['/followers'], {
      queryParams: {page: 1, order: 'newest'}
    });
    console.log('profile submit');
  }

  ngOnInit() {
    // this.route.paramMap
    //   .subscribe(params => {
    //     let id = +params.get('id');
    //   })
  }

}
