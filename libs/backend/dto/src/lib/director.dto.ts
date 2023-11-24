import { IsNotEmpty, IsString, IsOptional, IsDate } from 'class-validator';
import {
  ICreateDirector,
  IUpdateDirector,
  IUpsertDirector,
} from '@avans-indiv-p2/shared/api';

/**
 * Use the `Pick` utility type to extract only the properties we want for
 * new to-do items
 */
export class CreateDirectorDto implements ICreateDirector {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsString()
  @IsNotEmpty()
  nationality!: string;

  @IsDate()
  @IsNotEmpty()
  dateOfBirth!: Date;
}

export class UpsertDirectorDto implements IUpsertDirector {
  @IsString()
  @IsNotEmpty()
  id!: string;

  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsString()
  @IsNotEmpty()
  nationality!: string;

  @IsDate()
  @IsNotEmpty()
  dateOfBirth!: Date;
}

export class UpdateDirectorDto implements IUpdateDirector {
  @IsString()
  @IsOptional()
  id!: string;

  @IsString()
  @IsOptional()
  name!: string;

  @IsString()
  @IsOptional()
  nationality!: string;

  @IsDate()
  @IsOptional()
  dateOfBirth!: Date;
}
