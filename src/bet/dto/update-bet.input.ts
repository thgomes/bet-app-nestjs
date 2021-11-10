import { InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

@InputType()
export class UpdateBetInput {
  @IsString()
  @IsNotEmpty({ message: 'The user id field should not be empty.' })
  @IsOptional()
  userId?: string;

  @IsString()
  @IsNotEmpty({ message: 'The game id field should not be empty.' })
  @IsOptional()
  gameId?: string;

  @IsString()
  @IsNotEmpty({ message: 'The selected number field should not be empty.' })
  @IsOptional()
  selectedNumbers?: string;

  @IsNumber()
  @IsNotEmpty({ message: 'The price field should not be empty.' })
  @IsOptional()
  price?: number;
}
