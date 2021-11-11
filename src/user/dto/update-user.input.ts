import { InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

@InputType()
export class UpdateUserInput {
  @IsString()
  @IsNotEmpty({ message: 'Este campo onao pode estar vazio' })
  @IsOptional()
  name?: string;

  @IsEmail()
  @IsNotEmpty({ message: 'Este campo onao pode estar vazio' })
  @IsOptional()
  email?: string;

  @IsString()
  @IsNotEmpty({ message: 'The profile id field should not be empty.' })
  @IsOptional()
  profileId?: string;

  @IsString()
  @IsNotEmpty({ message: 'Password is required' })
  @IsOptional()
  password?: string;
}
