import { InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

@InputType()
export class UpdateGameInput {
  @IsString()
  @IsNotEmpty({ message: 'The type field should not be empty.' })
  @IsOptional()
  type?: string;

  @IsString()
  @IsNotEmpty({ message: 'The description field should not be empty.' })
  @IsOptional()
  description?: string;

  @IsString()
  @IsNotEmpty({ message: 'The color field should not be empty.' })
  @IsOptional()
  color?: string;

  @IsNumber()
  @IsNotEmpty({ message: 'The range field should not be empty.' })
  @IsOptional()
  range?: number;

  @IsNumber()
  @IsNotEmpty({ message: 'The price field should not be empty.' })
  @IsOptional()
  price?: number;

  @IsNumber()
  @IsNotEmpty({ message: 'The max number field should not be empty.' })
  @IsOptional()
  maxNumber?: number;
}
