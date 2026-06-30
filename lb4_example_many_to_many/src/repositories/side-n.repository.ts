import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyThroughRepositoryFactory} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {SideN, SideNRelations, SideM, Through} from '../models';
import {ThroughRepository} from './through.repository';
import {SideMRepository} from './side-m.repository';

export class SideNRepository extends DefaultCrudRepository<
  SideN,
  typeof SideN.prototype.id,
  SideNRelations
> {

  public readonly sideMS: HasManyThroughRepositoryFactory<SideM, typeof SideM.prototype.id,
          Through,
          typeof SideN.prototype.id
        >;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('ThroughRepository') protected throughRepositoryGetter: Getter<ThroughRepository>, @repository.getter('SideMRepository') protected sideMRepositoryGetter: Getter<SideMRepository>,
  ) {
    super(SideN, dataSource);
    this.sideMS = this.createHasManyThroughRepositoryFactoryFor('sideMS', sideMRepositoryGetter, throughRepositoryGetter,);
    this.registerInclusionResolver('sideMS', this.sideMS.inclusionResolver);
  }
}
