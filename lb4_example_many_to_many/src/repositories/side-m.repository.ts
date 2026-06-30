import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyThroughRepositoryFactory} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {SideM, SideMRelations, SideN, Through} from '../models';
import {ThroughRepository} from './through.repository';
import {SideNRepository} from './side-n.repository';

export class SideMRepository extends DefaultCrudRepository<
  SideM,
  typeof SideM.prototype.id,
  SideMRelations
> {

  public readonly sideNS: HasManyThroughRepositoryFactory<SideN, typeof SideN.prototype.id,
          Through,
          typeof SideM.prototype.id
        >;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('ThroughRepository') protected throughRepositoryGetter: Getter<ThroughRepository>, @repository.getter('SideNRepository') protected sideNRepositoryGetter: Getter<SideNRepository>,
  ) {
    super(SideM, dataSource);
    this.sideNS = this.createHasManyThroughRepositoryFactoryFor('sideNS', sideNRepositoryGetter, throughRepositoryGetter,);
    this.registerInclusionResolver('sideNS', this.sideNS.inclusionResolver);
  }
}
