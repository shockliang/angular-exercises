import { MyFollowersService } from './../services/my-followers/my-followers.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-followers',
  templateUrl: './my-followers.component.html',
  styleUrls: ['./my-followers.component.css']
})
export class MyFollowersComponent implements OnInit {
  followers: any[];

  constructor(private service: MyFollowersService) { }

  ngOnInit() {
    this.service.getAll()
      .subscribe(followers => this.followers = followers);
  }

}
