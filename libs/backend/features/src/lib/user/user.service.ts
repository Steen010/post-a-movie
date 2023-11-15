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
      gender: Gender.male,
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
}
