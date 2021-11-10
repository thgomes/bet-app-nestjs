import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Game {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: string;

  @Column({ unique: true })
  type: string;

  @Column()
  description: string;

  @Column()
  range: number;

  @Column({ type: 'float' })
  price: number;

  @Column()
  maxNumber: number;

  @Column()
  color: string;
}
