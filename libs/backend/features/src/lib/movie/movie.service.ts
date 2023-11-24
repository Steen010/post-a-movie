import { Injectable, NotFoundException } from '@nestjs/common';
import { IMovie } from '@avans-indiv-p2/shared/api';
import { BehaviorSubject } from 'rxjs';
import { Logger } from '@nestjs/common';

@Injectable()
export class MovieService {
  TAG = 'MovieService';

  private movies$ = new BehaviorSubject<IMovie[]>([
    {
      id: '0',
      title: 'Transformers',
      duration: '2h 34m',
      releaseDate: new Date(),
    },
    {
      id: '1',
      title: 'Star Trek',
      duration: '2h 12m',
      releaseDate: new Date(),
    },
    {
      id: '2',
      title: 'The Hobbit',
      duration: '3h 02m',
      releaseDate: new Date(),
    },
    {
      id: '3',
      title: 'Fight Club',
      duration: '2h 47m',
      releaseDate: new Date(),
    },
    {
      id: '4',
      title: 'The Green Book',
      duration: '2h 4m',
      releaseDate: new Date(),
    },
    {
      id: '5',
      title: 'Shrek',
      duration: '1h 57m',
      releaseDate: new Date(),
    },
  ]);

  getAll(): IMovie[] {
    Logger.log('getAll', this.TAG);
    return this.movies$.value;
  }

  getOne(id: string): IMovie {
    Logger.log(`getOne(${id})`, this.TAG);
    const movie = this.movies$.value.find((td) => td.id === id);
    if (!movie) {
      throw new NotFoundException(`Movie could not be found!`);
    }
    return movie;
  }

  /**
   * Update the arg signature to match the DTO, but keep the
   * return signature - we still want to respond with the complete
   * object
   */
  create(movie: Pick<IMovie, 'title' | 'duration' | 'releaseDate'>): IMovie {
    Logger.log('create', this.TAG);
    const current = this.movies$.value;
    // Use the incoming data, a randomized ID, and a default value of `false` to create the new to-do
    const newMovie: IMovie = {
      ...movie,
      id: `${Math.floor(Math.random() * 10000)}`,
    };
    this.movies$.next([...current, newMovie]);
    return newMovie;
  }

  update(
    director: Pick<IMovie, 'title' | 'duration' | 'releaseDate' | 'id'>
  ): IMovie {
    Logger.log('update', this.TAG);
    const current = this.movies$.value;
    const updatedMovie: IMovie = {
      ...director,
    };
    this.movies$.next([...current, updatedMovie]);
    return updatedMovie;
  }
}
