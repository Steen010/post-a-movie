import { Component, OnDestroy, OnInit } from '@angular/core';
import { IUser } from '@avans-indiv-p2/shared/api';
import { UserService } from '../user.service';
import { Subscription, switchMap, tap } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'avans-indiv-p2-user-detail',
  templateUrl: './user-detail.component.html',
  styles: [],
})
export class UserDetailComponent implements OnInit, OnDestroy {
  user: IUser | null = null;
  subscription: Subscription | undefined = undefined;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        tap((params: ParamMap) =>
          console.log('user.id = ', params.get('user_id'))
        ),
        switchMap((params: ParamMap) =>
          this.userService.read(params.get('user_id'))
        ),
        tap(console.log)
      )
      .subscribe((results) => {
        this.user = results;
      });
  }

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }
}
