import { Component, OnDestroy, OnInit } from '@angular/core';
import { Gender, IUser } from '@avans-indiv-p2/shared/api';
import { UserService } from '../user.service';
import { Subscription, of, switchMap, tap } from 'rxjs';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { initModals } from 'flowbite';

@Component({
  selector: 'avans-indiv-p2-user-edit',
  templateUrl: './user-edit.component.html',
  styles: [],
})
export class UserEditComponent implements OnInit, OnDestroy {
  user: IUser = {
    id: '',
    name: '',
    password: '',
    emailaddress: '',
    gender: Gender.None,
    dateOfBirth: new Date(),
  };

  genders: any[] = [
    { fullname: Gender.Male, shortname: Gender.Male },
    { fullname: Gender.Female, shortname: Gender.Female },
    { fullname: Gender.Unknown, shortname: Gender.Unknown },
  ];

  subscription: Subscription | undefined = undefined;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    initModals();
    this.route.paramMap
      .pipe(
        tap((params: ParamMap) => console.log('user.id = ', params.get('id'))),
        switchMap((params: ParamMap) => {
          if (params.get('id') === null) {
            return of({} as IUser);
          }
          return this.userService.read(params.get('id'));
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

    if (this.user.id !== undefined) {
      console.log('update user');
      this.userService
        .update(this.user)
        .subscribe(() =>
          this.router.navigate(['..'], { relativeTo: this.route })
        );
    } else {
      console.log('create user');
      console.log(this.user);
      this.userService
        .create(this.user)
        .subscribe((data) =>
          this.router.navigate(['..'], { relativeTo: this.route })
        );
    }
  }
}
