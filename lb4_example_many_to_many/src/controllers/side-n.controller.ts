import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {SideN} from '../models';
import {SideNRepository} from '../repositories';

export class SideNController {
  constructor(
    @repository(SideNRepository)
    public sideNRepository : SideNRepository,
  ) {}

  @post('/side-ns')
  @response(200, {
    description: 'SideN model instance',
    content: {'application/json': {schema: getModelSchemaRef(SideN)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SideN, {
            title: 'NewSideN',
            exclude: ['id'],
          }),
        },
      },
    })
    sideN: Omit<SideN, 'id'>,
  ): Promise<SideN> {
    return this.sideNRepository.create(sideN);
  }

  @get('/side-ns/count')
  @response(200, {
    description: 'SideN model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(SideN) where?: Where<SideN>,
  ): Promise<Count> {
    return this.sideNRepository.count(where);
  }

  @get('/side-ns')
  @response(200, {
    description: 'Array of SideN model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(SideN, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(SideN) filter?: Filter<SideN>,
  ): Promise<SideN[]> {
    return this.sideNRepository.find(filter);
  }

  @patch('/side-ns')
  @response(200, {
    description: 'SideN PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SideN, {partial: true}),
        },
      },
    })
    sideN: SideN,
    @param.where(SideN) where?: Where<SideN>,
  ): Promise<Count> {
    return this.sideNRepository.updateAll(sideN, where);
  }

  @get('/side-ns/{id}')
  @response(200, {
    description: 'SideN model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(SideN, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(SideN, {exclude: 'where'}) filter?: FilterExcludingWhere<SideN>
  ): Promise<SideN> {
    return this.sideNRepository.findById(id, filter);
  }

  @patch('/side-ns/{id}')
  @response(204, {
    description: 'SideN PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SideN, {partial: true}),
        },
      },
    })
    sideN: SideN,
  ): Promise<void> {
    await this.sideNRepository.updateById(id, sideN);
  }

  @put('/side-ns/{id}')
  @response(204, {
    description: 'SideN PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() sideN: SideN,
  ): Promise<void> {
    await this.sideNRepository.replaceById(id, sideN);
  }

  @del('/side-ns/{id}')
  @response(204, {
    description: 'SideN DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.sideNRepository.deleteById(id);
  }
}
