import { InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateProfileInput {
  @IsString()
  @IsNotEmpty({ message: 'The type field should not be empty.' })
  type: string;
}
