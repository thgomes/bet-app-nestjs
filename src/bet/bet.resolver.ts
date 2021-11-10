import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateBetInput } from './dto/create-bet.input';
import { UpdateBetInput } from './dto/update-bet.input';
import { Bet } from './bet.entity';
import { BetService } from './bet.service';

@Resolver()
export class BetResolver {
  constructor(private betService: BetService) {}

  @Query(() => [Bet])
  async bets(): Promise<Bet[]> {
    const bets = await this.betService.findAllBets();
    return bets;
  }

  @Query(() => Bet)
  async bet(@Args('id') id: string): Promise<Bet> {
    const bet = await this.betService.findBetById(id);
    return bet;
  }

  @Mutation(() => Bet)
  async createBet(@Args('data') data: CreateBetInput): Promise<Bet> {
    const bet = await this.betService.createBet(data);
    return bet;
  }

  @Mutation(() => Bet)
  async updateBet(
    @Args('id') id: string,
    @Args('data') data: UpdateBetInput,
  ): Promise<Bet> {
    const bet = this.betService.updateBet(id, data);
    return bet;
  }

  @Mutation(() => Boolean)
  async deleteBet(@Args('id') id: string): Promise<boolean> {
    const deleted = await this.betService.deleteBet(id);
    return deleted;
  }
}
