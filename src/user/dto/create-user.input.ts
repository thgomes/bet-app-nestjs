import { InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateUserInput {
  @IsString()
  @IsNotEmpty({ message: 'The name field should not be empty.' })
  name: string;

  @IsEmail()
  @IsNotEmpty({ message: 'The email field should not be empty.' })
  email: string;

  @IsString()
  @IsNotEmpty({ message: 'The profile id field should not be empty.' })
  profileId: string;

  @IsString()
  @IsNotEmpty({ message: 'The password field should not be empty.' })
  password: string;
}
