import { Injectable, NotFoundException } from '@nestjs/common';
import { IDirector } from '@avans-indiv-p2/shared/api';
import { BehaviorSubject } from 'rxjs';
import { Logger } from '@nestjs/common';

@Injectable()
export class DirectorService {
  TAG = 'DirectorService';

  private directors$ = new BehaviorSubject<IDirector[]>([
    {
      id: '0',
      name: 'Christopher Nolan',
      nationality: 'English',
      dateOfBirth: new Date(),
    },
    {
      id: '1',
      name: 'Martin Scorsese',
      nationality: 'American',
      dateOfBirth: new Date(),
    },
    {
      id: '2',
      name: 'Akira Kurosawa',
      nationality: 'Japanese',
      dateOfBirth: new Date(),
    },
    {
      id: '3',
      name: 'Quentin Tarantino',
      nationality: 'American',
      dateOfBirth: new Date(),
    },
    {
      id: '4',
      name: 'Alfred Hitchcock',
      nationality: 'English',
      dateOfBirth: new Date(),
    },
    {
      id: '5',
      name: 'Federico Fellini',
      nationality: 'Italian',
      dateOfBirth: new Date(),
    },
    {
      id: '6',
      name: 'Guillermo del Toro Gómez',
      nationality: 'Mexican',
      dateOfBirth: new Date(),
    },
  ]);

  getAll(): IDirector[] {
    Logger.log('getAll', this.TAG);
    return this.directors$.value;
  }

  getOne(id: string): IDirector {
    Logger.log(`getOne(${id})`, this.TAG);
    const director = this.directors$.value.find((td) => td.id === id);
    if (!director) {
      throw new NotFoundException(`Director could not be found!`);
    }
    return director;
  }

  /**
   * Update the arg signature to match the DTO, but keep the
   * return signature - we still want to respond with the complete
   * object
   */
  create(
    director: Pick<IDirector, 'name' | 'nationality' | 'dateOfBirth'>
  ): IDirector {
    Logger.log('create', this.TAG);
    const current = this.directors$.value;
    // Use the incoming data, a randomized ID, and a default value of `false` to create the new to-do
    const newDirector: IDirector = {
      ...director,
      id: `${Math.floor(Math.random() * 10000)}`,
    };
    this.directors$.next([...current, newDirector]);
    return newDirector;
  }

  update(
    director: Pick<IDirector, 'name' | 'nationality' | 'dateOfBirth' | 'id'>
  ): IDirector {
    Logger.log('update', this.TAG);
    const current = this.directors$.value;
    const updatedDirector: IDirector = {
      ...director,
    };
    this.directors$.next([...current, updatedDirector]);
    return updatedDirector;
  }
}
