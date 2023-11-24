import { IsNotEmpty, IsString, IsOptional, IsDate } from 'class-validator';
import {
  ICreateMovie,
  IUpdateMovie,
  IUpsertMovie,
} from '@avans-indiv-p2/shared/api';

/**
 * Use the `Pick` utility type to extract only the properties we want for
 * new to-do items
 */
export class CreateMovieDto implements ICreateMovie {
  @IsString()
  @IsNotEmpty()
  title!: string;

  @IsString()
  @IsNotEmpty()
  duration!: string;

  @IsDate()
  @IsNotEmpty()
  releaseDate!: Date;
}

export class UpsertMovieDto implements IUpsertMovie {
  @IsString()
  @IsNotEmpty()
  id!: string;

  @IsString()
  @IsNotEmpty()
  title!: string;

  @IsString()
  @IsNotEmpty()
  duration!: string;

  @IsDate()
  @IsNotEmpty()
  releaseDate!: Date;
}

export class UpdateMovieDto implements IUpdateMovie {
  @IsString()
  @IsOptional()
  id!: string;

  @IsString()
  @IsOptional()
  title!: string;

  @IsString()
  @IsOptional()
  duration!: string;

  @IsDate()
  @IsOptional()
  releaseDate!: Date;
}
