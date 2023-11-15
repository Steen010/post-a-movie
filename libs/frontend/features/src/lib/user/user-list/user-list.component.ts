import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../user.service';
import { IUser } from '@avans-indiv-p2/shared/api';
import { Subscription } from 'rxjs';

@Component({
  selector: 'avans-indiv-p2-user-list',
  templateUrl: './user-list.component.html',
  styles: [],
})
export class UserListComponent implements OnInit, OnDestroy {
  users: IUser[] | null = null;
  subscription: Subscription | undefined = undefined;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.subscription = this.userService.list().subscribe((results) => {
      console.log(`results: ${results}`);
      this.users = results;
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }
}
