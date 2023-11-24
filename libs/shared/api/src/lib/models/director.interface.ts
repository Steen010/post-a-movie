import { Id } from './id.type';

export interface IDirector {
  id: Id;
  name: string;
  nationality: string;
  dateOfBirth: Date;
}

export type ICreateDirector = Pick<
  IDirector,
  'name' | 'dateOfBirth' | 'nationality'
>;
export type IUpdateDirector = Partial<Omit<IDirector, 'id'>>;
export type IUpsertDirector = IDirector;
