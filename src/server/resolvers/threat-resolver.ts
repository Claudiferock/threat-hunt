import { Resolver, Query, Arg } from 'type-graphql'

import { Threat } from '../entities/threat'
import { InjectRepository } from 'typeorm-typedi-extensions'
import { Repository } from 'typeorm'

@Resolver(Threat)
export class ThreatResolver {
  constructor(
    @InjectRepository(Threat) private readonly threatRepository: Repository<Threat>
  ) { }

  @Query(returns => [Threat])
  threats(): Promise<Threat[]> {
    return this.threatRepository.find()
  }
}
