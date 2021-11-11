import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateBetInput } from './dto/create-bet.input';
import { UpdateBetInput } from './dto/update-bet.input';
import { Bet } from './bet.entity';
import { BetService } from './bet.service';
import { GqlAuthGuard } from 'src/auth/auth.guard';
import { UseGuards } from '@nestjs/common';
import { AdminGuard } from 'src/auth/admin.guard';

@Resolver()
export class BetResolver {
  constructor(private betService: BetService) {}

  @UseGuards(GqlAuthGuard)
  @Query(() => [Bet])
  async bets(): Promise<Bet[]> {
    const bets = await this.betService.findAllBets();
    return bets;
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => Bet)
  async bet(@Args('id') id: string): Promise<Bet> {
    const bet = await this.betService.findBetById(id);
    return bet;
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Bet)
  async createBet(@Args('data') data: CreateBetInput): Promise<Bet> {
    const bet = await this.betService.createBet(data);
    return bet;
  }

  @UseGuards(AdminGuard)
  @UseGuards(GqlAuthGuard)
  @Mutation(() => Bet)
  async updateBet(
    @Args('id') id: string,
    @Args('data') data: UpdateBetInput,
  ): Promise<Bet> {
    const bet = this.betService.updateBet(id, data);
    return bet;
  }

  @UseGuards(AdminGuard)
  @UseGuards(GqlAuthGuard)
  @Mutation(() => Boolean)
  async deleteBet(@Args('id') id: string): Promise<boolean> {
    const deleted = await this.betService.deleteBet(id);
    return deleted;
  }
}
