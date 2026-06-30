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
SideM,
Through,
SideN,
} from '../models';
import {SideMRepository} from '../repositories';

export class SideMSideNController {
  constructor(
    @repository(SideMRepository) protected sideMRepository: SideMRepository,
  ) { }

  @get('/side-ms/{id}/side-ns', {
    responses: {
      '200': {
        description: 'Array of SideM has many SideN through Through',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(SideN)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<SideN>,
  ): Promise<SideN[]> {
    return this.sideMRepository.sideNS(id).find(filter);
  }

  @post('/side-ms/{id}/side-ns', {
    responses: {
      '200': {
        description: 'create a SideN model instance',
        content: {'application/json': {schema: getModelSchemaRef(SideN)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof SideM.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SideN, {
            title: 'NewSideNInSideM',
            exclude: ['id'],
          }),
        },
      },
    }) sideN: Omit<SideN, 'id'>,
  ): Promise<SideN> {
    return this.sideMRepository.sideNS(id).create(sideN);
  }

  @patch('/side-ms/{id}/side-ns', {
    responses: {
      '200': {
        description: 'SideM.SideN PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SideN, {partial: true}),
        },
      },
    })
    sideN: Partial<SideN>,
    @param.query.object('where', getWhereSchemaFor(SideN)) where?: Where<SideN>,
  ): Promise<Count> {
    return this.sideMRepository.sideNS(id).patch(sideN, where);
  }

  @del('/side-ms/{id}/side-ns', {
    responses: {
      '200': {
        description: 'SideM.SideN DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(SideN)) where?: Where<SideN>,
  ): Promise<Count> {
    return this.sideMRepository.sideNS(id).delete(where);
  }
}
