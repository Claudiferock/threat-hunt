import { Resolver, Query, Arg } from 'type-graphql'

import { Hero } from '../entities/hero'
import { InjectRepository } from 'typeorm-typedi-extensions'
import { Repository } from 'typeorm'

@Resolver(Hero)
export class HeroResolver {
  constructor(
    @InjectRepository(Hero) private readonly heroRepository: Repository<Hero>
  ) { }

  @Query(returns => [Hero])
  heroes(): Promise<Hero[]> {
    return this.heroRepository.find()
  }
}
