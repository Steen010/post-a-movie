import { Component, OnDestroy, OnInit } from '@angular/core';
import { Gender, IUser } from '@avans-indiv-p2/shared/api';
import { UserService } from '../user.service';
import { Subscription, switchMap, tap } from 'rxjs';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'avans-indiv-p2-user-edit',
  templateUrl: './user-edit.component.html',
  styles: [],
})
export class UserEditComponent implements OnInit, OnDestroy {
  user: IUser = {
    user_id: '',
    name: '',
    password: '',
    emailaddress: '',
    gender: Gender.None,
    dateOfBirth: new Date(),
  };

  subscription: Subscription | undefined = undefined;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        tap((params: ParamMap) =>
          console.log('user.user_id = ', params.get('user_id'))
        ),
        switchMap((params: ParamMap) => {
          if (params.get('user_id') === null) {
            return this.userService.create();
          }
          return this.userService.read(params.get('user_id'));
        }),
        tap(console.log)
      )
      .subscribe((results) => {
        this.user = results;
      });
  }

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }

  onSubmit(): void {
    console.log('onSubmit', this.user);

    if (this.user.user_id) {
      console.log('update user');
      this.userService
        .update(this.user)
        .subscribe(() =>
          this.router.navigate(['..'], { relativeTo: this.route })
        );
    } else {
      console.log('create user');
      this.userService
        .create(this.user)
        .subscribe((data) =>
          this.router.navigate(['..'], { relativeTo: this.route })
        );
    }
  }
}
