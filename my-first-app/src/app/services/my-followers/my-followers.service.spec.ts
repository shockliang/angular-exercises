import { TestBed, inject } from '@angular/core/testing';

import { MyFollowersService } from './my-followers.service';

describe('MyFollowersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyFollowersService]
    });
  });

  it('should be created', inject([MyFollowersService], (service: MyFollowersService) => {
    expect(service).toBeTruthy();
  }));
});
