import { Component, OnDestroy, OnInit } from '@angular/core';
import { IMovie } from '@avans-indiv-p2/shared/api';
import { MovieService } from '../movie.service';
import { Subscription, of, switchMap, tap } from 'rxjs';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { initModals } from 'flowbite';

@Component({
  selector: 'avans-indiv-p2-movie-edit',
  templateUrl: './movie-edit.component.html',
  styles: [],
})
export class MovieEditComponent implements OnInit, OnDestroy {
  movie: IMovie = {
    id: '',
    title: '',
    duration: '',
    releaseDate: new Date(),
  };

  subscription: Subscription | undefined = undefined;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    initModals();
    this.route.paramMap
      .pipe(
        tap((params: ParamMap) => console.log('movie.id = ', params.get('id'))),
        switchMap((params: ParamMap) => {
          if (params.get('id') === null) {
            return of({} as IMovie);
          }
          return this.movieService.read(params.get('id'));
        }),
        tap(console.log)
      )
      .subscribe((results) => {
        this.movie = results;
      });
  }

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }

  onSubmit(): void {
    console.log('onSubmit', this.movie);

    if (this.movie.id !== undefined) {
      console.log('update movie');
      this.movieService
        .update(this.movie)
        .subscribe(() =>
          this.router.navigate(['..'], { relativeTo: this.route })
        );
    } else {
      console.log('create movie');
      console.log(this.movie);
      this.movieService
        .create(this.movie)
        .subscribe((data) =>
          this.router.navigate(['..'], { relativeTo: this.route })
        );
    }
  }
}
