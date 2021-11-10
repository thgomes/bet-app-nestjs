import { Field, HideField, ID, ObjectType } from '@nestjs/graphql';
import { Bet } from 'src/bet/bet.entity';
import { hashPasswordTransform } from 'src/helpers/crypto';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column({
    transformer: hashPasswordTransform,
  })
  @HideField()
  password: string;

  @OneToMany(() => Bet, (bet) => bet.userId)
  users: Bet[];
}
