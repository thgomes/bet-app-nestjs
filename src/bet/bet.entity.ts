import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Game } from 'src/game/game.entity';
import { User } from 'src/user/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

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

  @ManyToOne(() => Game)
  game: Game;

  @ManyToOne(() => User)
  user: User;
}
