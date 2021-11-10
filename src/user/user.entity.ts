import { Field, HideField, ID, ObjectType } from '@nestjs/graphql';
import { Bet } from 'src/bet/bet.entity';
import { hashPasswordTransform } from 'src/helpers/crypto';
import { Profile } from 'src/profile/profile.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

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

  @Column({})
  profileId: number;

  @Column({
    transformer: hashPasswordTransform,
  })
  @HideField()
  password: string;

  @ManyToOne(() => Profile)
  profile: Profile;

  @OneToMany(() => Bet, (bet) => bet.userId)
  users: Bet[];
}
