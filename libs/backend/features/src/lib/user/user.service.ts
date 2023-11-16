import { Injectable, NotFoundException } from '@nestjs/common';
import { IUser, Gender } from '@avans-indiv-p2/shared/api';
import { BehaviorSubject } from 'rxjs';
import { Logger } from '@nestjs/common';

@Injectable()
export class UserService {
  TAG = 'UserService';

  private users$ = new BehaviorSubject<IUser[]>([
    {
      user_id: '0',
      name: 'Koen van Steen',
      password: 'Wachtwoord123!',
      emailaddress: 'koen@gmail.com',
      gender: Gender.Male,
      dateOfBirth: new Date(),
    },
    {
      user_id: '1',
      name: 'Emily Johnson',
      password: 'SecurePass456',
      emailaddress: 'emily@email.com',
      gender: Gender.Female,
      dateOfBirth: new Date(),
    },
    {
      user_id: '2',
      name: 'Bob Marley',
      password: 'Other password',
      emailaddress: 'Bobby@email.com',
      gender: Gender.Unknown,
      dateOfBirth: new Date(),
    },
    {
      user_id: '3',
      name: 'Michael Jackson',
      password: 'Secureefee56',
      emailaddress: 'michaelhsshhs@email.com',
      gender: Gender.Male,
      dateOfBirth: new Date(),
    },
    {
      user_id: '4',
      name: 'Stevie Wonder',
      password: 'Wowcoolpassword',
      emailaddress: 'steve@gmail.nl',
      gender: Gender.Male,
      dateOfBirth: new Date(),
    },
    {
      user_id: '5',
      name: 'Pete Davidson',
      password: 'Badpassword',
      emailaddress: 'kanye@kim.com',
      gender: Gender.Unknown,
      dateOfBirth: new Date(),
    },
  ]);

  getAll(): IUser[] {
    Logger.log('getAll', this.TAG);
    return this.users$.value;
  }

  getOne(id: string): IUser {
    Logger.log(`getOne(${id})`, this.TAG);
    const user = this.users$.value.find((td) => td.user_id === id);
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
      user_id: `user-${Math.floor(Math.random() * 10000)}`,
    };
    this.users$.next([...current, newUser]);
    return newUser;
  }

  // Werkt dit nou?!?!?!
  update(
    user: Pick<
      IUser,
      'name' | 'password' | 'emailaddress' | 'gender' | 'dateOfBirth'
    >
  ): IUser {
    Logger.log('create', this.TAG);
    const current = this.users$.value;
    const newUser: IUser = {
      ...user,
      user_id: '0',
    };
    this.users$.next([...current, newUser]);
    return newUser;
  }
}
