import { Injectable, NotFoundException } from '@nestjs/common';
import { IUser, Gender } from '@avans-indiv-p2/shared/api';
import { BehaviorSubject } from 'rxjs';
import { Logger } from '@nestjs/common';

@Injectable()
export class UserService {
  TAG = 'UserService';

  private users$ = new BehaviorSubject<IUser[]>([
    {
      id: '0',
      name: 'Paul McCartney',
      password: 'Password123!',
      emailaddress: 'paul@gmail.com',
      gender: Gender.Male,
      dateOfBirth: new Date(),
    },
    {
      id: '1',
      name: 'John Lennon',
      password: 'SecurePass456',
      emailaddress: 'John@email.com',
      gender: Gender.Male,
      dateOfBirth: new Date(),
    },
    {
      id: '2',
      name: 'Bob Marley',
      password: 'Mypasswordee444',
      emailaddress: 'Bobby@email.com',
      gender: Gender.Male,
      dateOfBirth: new Date(),
    },
    {
      id: '3',
      name: 'Michael Jackson',
      password: 'Secureefee56',
      emailaddress: 'michael@email.com',
      gender: Gender.Male,
      dateOfBirth: new Date(),
    },
    {
      id: '4',
      name: 'Stevie Wonder',
      password: 'Wowcoolpassword',
      emailaddress: 'steve@gmail.nl',
      gender: Gender.Male,
      dateOfBirth: new Date(),
    },
    {
      id: '5',
      name: 'Jimi Hendrix',
      password: 'Badpassword',
      emailaddress: 'jimi@gmail.com',
      gender: Gender.Male,
      dateOfBirth: new Date(),
    },
  ]);

  getAll(): IUser[] {
    Logger.log('getAll', this.TAG);
    return this.users$.value;
  }

  getOne(id: string): IUser {
    Logger.log(`getOne(${id})`, this.TAG);
    const user = this.users$.value.find((td) => td.id === id);
    if (!user) {
      throw new NotFoundException(`User could not be found!`);
    }
    return user;
  }

  /**
   * Update the arg signature to match the DTO, but keep the
   * return signature - we still want to respond with the complete
   * object
   */
  create(
    user: Pick<
      IUser,
      'name' | 'password' | 'emailaddress' | 'gender' | 'dateOfBirth'
    >
  ): IUser {
    Logger.log('create', this.TAG);
    const current = this.users$.value;
    // Use the incoming data, a randomized ID, and a default value of `false` to create the new to-do
    const newUser: IUser = {
      ...user,
      id: `${Math.floor(Math.random() * 10000)}`,
    };
    this.users$.next([...current, newUser]);
    return newUser;
  }

  update(
    user: Pick<
      IUser,
      'name' | 'password' | 'emailaddress' | 'gender' | 'dateOfBirth' | 'id'
    >
  ): IUser {
    Logger.log('update', this.TAG);
    const current = this.users$.value;
    const updatedUser: IUser = {
      ...user,
    };
    this.users$.next([...current, updatedUser]);
    return updatedUser;
  }
}
