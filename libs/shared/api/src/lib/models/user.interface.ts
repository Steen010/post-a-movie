import { Id } from './id.type';

export enum Gender {
  male = 'Male',
  female = 'Female',
}

export interface IUser {
  user_id: Id;
  emailaddress: string;
  name: string;
  password: string;
  gender: Gender;
  dateOfBirth: Date;
}

export type ICreateUser = Pick<
  IUser,
  'name' | 'password' | 'emailaddress' | 'gender' | 'dateOfBirth'
>;
export type IUpdateUser = Partial<Omit<IUser, 'id'>>;
export type IUpsertUser = IUser;
