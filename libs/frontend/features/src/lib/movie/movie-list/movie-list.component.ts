import { Component, OnInit, OnDestroy } from '@angular/core';
import { MovieService } from '../movie.service';
import { IMovie } from '@avans-indiv-p2/shared/api';
import { Subscription } from 'rxjs';

@Component({
  selector: 'avans-indiv-p2-movie-list',
  templateUrl: './movie-list.component.html',
  styles: [],
})
export class MovieListComponent implements OnInit, OnDestroy {
  movies: IMovie[] | null = null;
  subscription: Subscription | undefined = undefined;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.subscription = this.movieService.list().subscribe((results) => {
      console.log(`results: ${results}`);
      this.movies = results;
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }
}
