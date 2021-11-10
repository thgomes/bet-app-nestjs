import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Game } from './game.entity';
import { GameResolver } from './game.resolver';
import { GameService } from './game.service';

@Module({
  imports: [TypeOrmModule.forFeature([Game])],
  providers: [GameResolver, GameService],
})
export class GameModule {}
