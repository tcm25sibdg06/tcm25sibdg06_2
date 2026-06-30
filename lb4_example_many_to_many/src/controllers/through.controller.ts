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
import {Through} from '../models';
import {ThroughRepository} from '../repositories';

export class ThroughController {
  constructor(
    @repository(ThroughRepository)
    public throughRepository : ThroughRepository,
  ) {}

  @post('/throughs')
  @response(200, {
    description: 'Through model instance',
    content: {'application/json': {schema: getModelSchemaRef(Through)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Through, {
            title: 'NewThrough',
            exclude: ['id'],
          }),
        },
      },
    })
    through: Omit<Through, 'id'>,
  ): Promise<Through> {
    return this.throughRepository.create(through);
  }

  @get('/throughs/count')
  @response(200, {
    description: 'Through model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Through) where?: Where<Through>,
  ): Promise<Count> {
    return this.throughRepository.count(where);
  }

  @get('/throughs')
  @response(200, {
    description: 'Array of Through model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Through, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Through) filter?: Filter<Through>,
  ): Promise<Through[]> {
    return this.throughRepository.find(filter);
  }

  @patch('/throughs')
  @response(200, {
    description: 'Through PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Through, {partial: true}),
        },
      },
    })
    through: Through,
    @param.where(Through) where?: Where<Through>,
  ): Promise<Count> {
    return this.throughRepository.updateAll(through, where);
  }

  @get('/throughs/{id}')
  @response(200, {
    description: 'Through model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Through, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Through, {exclude: 'where'}) filter?: FilterExcludingWhere<Through>
  ): Promise<Through> {
    return this.throughRepository.findById(id, filter);
  }

  @patch('/throughs/{id}')
  @response(204, {
    description: 'Through PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Through, {partial: true}),
        },
      },
    })
    through: Through,
  ): Promise<void> {
    await this.throughRepository.updateById(id, through);
  }

  @put('/throughs/{id}')
  @response(204, {
    description: 'Through PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() through: Through,
  ): Promise<void> {
    await this.throughRepository.replaceById(id, through);
  }

  @del('/throughs/{id}')
  @response(204, {
    description: 'Through DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.throughRepository.deleteById(id);
  }
}
