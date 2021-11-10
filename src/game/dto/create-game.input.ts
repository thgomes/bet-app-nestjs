import { InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

@InputType()
export class CreateGameInput {
  @IsString()
  @IsNotEmpty({ message: 'The type field should not be empty.' })
  type: string;

  @IsString()
  @IsNotEmpty({ message: 'The description field should not be empty.' })
  description: string;

  @IsString()
  @IsNotEmpty({ message: 'The color field should not be empty.' })
  color: string;

  @IsNumber()
  @IsNotEmpty({ message: 'The range field should not be empty.' })
  range: number;

  @IsNumber()
  @IsNotEmpty({ message: 'The price field should not be empty.' })
  price: number;

  @IsNumber()
  @IsNotEmpty({ message: 'The max number field should not be empty.' })
  maxNumber: number;
}
