import { Component, OnDestroy, OnInit } from '@angular/core';
import { IDirector } from '@avans-indiv-p2/shared/api';
import { DirectorService } from '../director.service';
import { Subscription, of, switchMap, tap } from 'rxjs';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { initModals } from 'flowbite';

@Component({
  selector: 'avans-indiv-p2-director-edit',
  templateUrl: './director-edit.component.html',
  styles: [],
})
export class DirectorEditComponent implements OnInit, OnDestroy {
  director: IDirector = {
    id: '',
    name: '',
    nationality: '',
    dateOfBirth: new Date(),
  };

  subscription: Subscription | undefined = undefined;

  constructor(
    private directorService: DirectorService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    initModals();
    this.route.paramMap
      .pipe(
        tap((params: ParamMap) =>
          console.log('director.id = ', params.get('id'))
        ),
        switchMap((params: ParamMap) => {
          if (params.get('id') === null) {
            return of({} as IDirector);
          }
          return this.directorService.read(params.get('id'));
        }),
        tap(console.log)
      )
      .subscribe((results) => {
        this.director = results;
      });
  }

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }

  onSubmit(): void {
    console.log('onSubmit', this.director);

    if (this.director.id !== undefined) {
      console.log('update director');
      this.directorService
        .update(this.director)
        .subscribe(() =>
          this.router.navigate(['..'], { relativeTo: this.route })
        );
    } else {
      console.log('create director');
      console.log(this.director);
      this.directorService
        .create(this.director)
        .subscribe((data) =>
          this.router.navigate(['..'], { relativeTo: this.route })
        );
    }
  }
}
