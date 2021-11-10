import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Bet {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: string;

  @Column()
  userId: string;

  @Column()
  gameId: string;

  @Column({ type: 'float' })
  price: number;

  @Column()
  selectedNumbers: string;
}
