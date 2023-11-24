import { Id } from './id.type';

export interface IMovie {
  id: Id;
  title: string;
  duration: string;
  releaseDate: Date;
}

export type ICreateMovie = Pick<IMovie, 'title' | 'releaseDate' | 'duration'>;
export type IUpdateMovie = Partial<Omit<IMovie, 'id'>>;
export type IUpsertMovie = IMovie;
