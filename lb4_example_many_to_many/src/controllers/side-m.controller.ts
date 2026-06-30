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
import {SideM} from '../models';
import {SideMRepository} from '../repositories';

export class SideMController {
  constructor(
    @repository(SideMRepository)
    public sideMRepository : SideMRepository,
  ) {}

  @post('/side-ms')
  @response(200, {
    description: 'SideM model instance',
    content: {'application/json': {schema: getModelSchemaRef(SideM)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SideM, {
            title: 'NewSideM',
            exclude: ['id'],
          }),
        },
      },
    })
    sideM: Omit<SideM, 'id'>,
  ): Promise<SideM> {
    return this.sideMRepository.create(sideM);
  }

  @get('/side-ms/count')
  @response(200, {
    description: 'SideM model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(SideM) where?: Where<SideM>,
  ): Promise<Count> {
    return this.sideMRepository.count(where);
  }

  @get('/side-ms')
  @response(200, {
    description: 'Array of SideM model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(SideM, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(SideM) filter?: Filter<SideM>,
  ): Promise<SideM[]> {
    return this.sideMRepository.find(filter);
  }

  @patch('/side-ms')
  @response(200, {
    description: 'SideM PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SideM, {partial: true}),
        },
      },
    })
    sideM: SideM,
    @param.where(SideM) where?: Where<SideM>,
  ): Promise<Count> {
    return this.sideMRepository.updateAll(sideM, where);
  }

  @get('/side-ms/{id}')
  @response(200, {
    description: 'SideM model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(SideM, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(SideM, {exclude: 'where'}) filter?: FilterExcludingWhere<SideM>
  ): Promise<SideM> {
    return this.sideMRepository.findById(id, filter);
  }

  @patch('/side-ms/{id}')
  @response(204, {
    description: 'SideM PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SideM, {partial: true}),
        },
      },
    })
    sideM: SideM,
  ): Promise<void> {
    await this.sideMRepository.updateById(id, sideM);
  }

  @put('/side-ms/{id}')
  @response(204, {
    description: 'SideM PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() sideM: SideM,
  ): Promise<void> {
    await this.sideMRepository.replaceById(id, sideM);
  }

  @del('/side-ms/{id}')
  @response(204, {
    description: 'SideM DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.sideMRepository.deleteById(id);
  }
}
