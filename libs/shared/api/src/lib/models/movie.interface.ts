import { IDirector } from './director.interface';
import { Id } from './id.type';

export interface IMovie {
  id: Id;
  title: string;
  duration: string;
  releaseDate: Date;
  director: IDirector;
}

export type ICreateMovie = Pick<
  IMovie,
  'title' | 'releaseDate' | 'duration' | 'director'
>;
export type IUpdateMovie = Partial<Omit<IMovie, 'id'>>;
export type IUpsertMovie = IMovie;
