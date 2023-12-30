import { Expose } from 'class-transformer';
import {
  IsString,
  IsNotEmpty,
  MinLength,
  MaxLength,
  IsNumber,
  Matches,
  IsEmail,
  IsOptional,
} from 'class-validator';
import constants from '../../constant';
export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(40)
  firstName: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(40)
  lastName: string;

  @IsEmail()
  @IsNotEmpty()
  @Matches(constants.EMAIL_REGEX, { message: constants.enterValidEmail })
  email: string;

  @IsNumber()
  @IsNotEmpty()
  phoneNumber: number;
}
