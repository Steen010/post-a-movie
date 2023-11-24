import { Component, OnDestroy, OnInit } from '@angular/core';
import { IMovie } from '@avans-indiv-p2/shared/api';
import { MovieService } from '../movie.service';
import { Subscription, switchMap, tap } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'avans-indiv-p2-movie-detail',
  templateUrl: './movie-detail.component.html',
  styles: [],
})
export class MovieDetailComponent implements OnInit, OnDestroy {
  movie: IMovie | null = null;
  subscription: Subscription | undefined = undefined;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        tap((params: ParamMap) => console.log('movie.id = ', params.get('id'))),
        switchMap((params: ParamMap) =>
          this.movieService.read(params.get('id'))
        ),
        tap(console.log)
      )
      .subscribe((results) => {
        this.movie = results;
      });
  }

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }
}
