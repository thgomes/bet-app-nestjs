import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Profile {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: string;

  @Column({ unique: true })
  type: string;
}
