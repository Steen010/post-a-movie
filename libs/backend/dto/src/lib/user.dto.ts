import { IsNotEmpty, IsString, IsOptional, IsDate } from 'class-validator';
import {
  ICreateUser,
  IUpdateUser,
  IUpsertUser,
  Gender,
} from '@avans-indiv-p2/shared/api';

/**
 * Use the `Pick` utility type to extract only the properties we want for
 * new to-do items
 */
export class CreateUserDto implements ICreateUser {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsString()
  @IsNotEmpty()
  password!: string;

  @IsString()
  @IsNotEmpty()
  emailaddress!: string;

  @IsDate()
  @IsNotEmpty()
  dateOfBirth!: Date;

  @IsString()
  @IsNotEmpty()
  gender!: Gender;
}

export class UpsertUserDto implements IUpsertUser {
  @IsString()
  @IsNotEmpty()
  user_id!: string;

  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsString()
  @IsNotEmpty()
  password!: string;

  @IsString()
  @IsNotEmpty()
  emailaddress!: string;

  @IsDate()
  @IsNotEmpty()
  dateOfBirth!: Date;

  @IsString()
  @IsNotEmpty()
  gender!: Gender;
}

export class UpdateUserDto implements IUpdateUser {
  @IsString()
  @IsOptional()
  name!: string;

  @IsString()
  @IsOptional()
  password!: string;

  @IsString()
  @IsOptional()
  emailaddress!: string;

  @IsDate()
  @IsOptional()
  dateOfBirth!: Date;

  @IsString()
  @IsOptional()
  gender!: Gender;
}
