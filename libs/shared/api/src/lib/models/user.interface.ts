import { Id } from './id.type';

export enum Gender {
  Male = 'Male',
  Female = 'Female',
  Unknown = 'Unknown',
  None = 'none',
}

export interface IUser {
  id: Id;
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
