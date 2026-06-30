import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
  import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
SideN,
Through,
SideM,
} from '../models';
import {SideNRepository} from '../repositories';

export class SideNSideMController {
  constructor(
    @repository(SideNRepository) protected sideNRepository: SideNRepository,
  ) { }

  @get('/side-ns/{id}/side-ms', {
    responses: {
      '200': {
        description: 'Array of SideN has many SideM through Through',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(SideM)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<SideM>,
  ): Promise<SideM[]> {
    return this.sideNRepository.sideMS(id).find(filter);
  }

  @post('/side-ns/{id}/side-ms', {
    responses: {
      '200': {
        description: 'create a SideM model instance',
        content: {'application/json': {schema: getModelSchemaRef(SideM)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof SideN.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SideM, {
            title: 'NewSideMInSideN',
            exclude: ['id'],
          }),
        },
      },
    }) sideM: Omit<SideM, 'id'>,
  ): Promise<SideM> {
    return this.sideNRepository.sideMS(id).create(sideM);
  }

  @patch('/side-ns/{id}/side-ms', {
    responses: {
      '200': {
        description: 'SideN.SideM PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SideM, {partial: true}),
        },
      },
    })
    sideM: Partial<SideM>,
    @param.query.object('where', getWhereSchemaFor(SideM)) where?: Where<SideM>,
  ): Promise<Count> {
    return this.sideNRepository.sideMS(id).patch(sideM, where);
  }

  @del('/side-ns/{id}/side-ms', {
    responses: {
      '200': {
        description: 'SideN.SideM DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(SideM)) where?: Where<SideM>,
  ): Promise<Count> {
    return this.sideNRepository.sideMS(id).delete(where);
  }
}
