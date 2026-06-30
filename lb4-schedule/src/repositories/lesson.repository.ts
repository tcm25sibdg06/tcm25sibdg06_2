import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Lesson, LessonRelations, Schedule} from '../models';
import {ScheduleRepository} from './schedule.repository';

export class LessonRepository extends DefaultCrudRepository<
  Lesson,
  typeof Lesson.prototype.id,
  LessonRelations
> {

  public readonly shedule: BelongsToAccessor<Schedule, typeof Lesson.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('ScheduleRepository') protected scheduleRepositoryGetter: Getter<ScheduleRepository>,
  ) {
    super(Lesson, dataSource);
    this.shedule = this.createBelongsToAccessorFor('shedule', scheduleRepositoryGetter,);
    this.registerInclusionResolver('shedule', this.shedule.inclusionResolver);
  }
}
