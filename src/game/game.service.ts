import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGameInput } from './dto/create-game.input';
import { UpdateGameInput } from './dto/update-game.input';
import { Game } from './game.entity';

@Injectable()
export class GameService {
  constructor(
    @InjectRepository(Game)
    private gameRepository: Repository<Game>,
  ) {}

  async findAllGames(): Promise<Game[]> {
    const games = await this.gameRepository.find();
    return games;
  }

  async findGameById(id: string): Promise<Game> {
    const game = await this.gameRepository.findOne(id);
    if (!game) {
      throw new NotFoundException('Game not found');
    }
    return game;
  }

  async createGame(data: CreateGameInput): Promise<Game> {
    const game = this.gameRepository.create(data);
    const gameSaved = await this.gameRepository.save(game);
    if (!gameSaved) {
      throw new InternalServerErrorException('game creation error');
    }
    return gameSaved;
  }

  async updateGame(id: string, data: UpdateGameInput): Promise<Game> {
    const game = await this.findGameById(id);

    await this.gameRepository.update(game, { ...data });

    const gameUpdated = this.gameRepository.create({ ...game, ...data });

    return gameUpdated;
  }

  async deleteGame(id: string): Promise<boolean> {
    const game = await this.findGameById(id);

    const deleted = await this.gameRepository.delete(game);

    if (deleted) {
      return true;
    }

    return false;
  }
}
