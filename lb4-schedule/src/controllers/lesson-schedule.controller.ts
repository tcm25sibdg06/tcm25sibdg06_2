import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Lesson,
  Schedule,
} from '../models';
import {LessonRepository} from '../repositories';

export class LessonScheduleController {
  constructor(
    @repository(LessonRepository)
    public lessonRepository: LessonRepository,
  ) { }

  @get('/lessons/{id}/schedule', {
    responses: {
      '200': {
        description: 'Schedule belonging to Lesson',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Schedule),
          },
        },
      },
    },
  })
  async getSchedule(
    @param.path.number('id') id: typeof Lesson.prototype.id,
  ): Promise<Schedule> {
    return this.lessonRepository.shedule(id);
  }
}
