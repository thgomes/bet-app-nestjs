import { InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

@InputType()
export class CreateBetInput {
  @IsString()
  @IsNotEmpty({ message: 'The user id field should not be empty.' })
  userId: string;

  @IsString()
  @IsNotEmpty({ message: 'The game id field should not be empty.' })
  gameId: string;

  @IsString()
  @IsNotEmpty({ message: 'The selected number field should not be empty.' })
  selectedNumbers: string;

  @IsNumber()
  @IsNotEmpty({ message: 'The price field should not be empty.' })
  price: number;
}
