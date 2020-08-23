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
} from '@loopback/rest';
import {Referenciados} from '../models';
import {ReferenciadosRepository} from '../repositories';

export class ReferenciadosController {
  constructor(
    @repository(ReferenciadosRepository)
    public referenciadosRepository : ReferenciadosRepository,
  ) {}

  @post('/referenciados', {
    responses: {
      '200': {
        description: 'Referenciados model instance',
        content: {'application/json': {schema: getModelSchemaRef(Referenciados)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Referenciados, {
            title: 'NewReferenciados',
            
          }),
        },
      },
    })
    referenciados: Referenciados,
  ): Promise<Referenciados> {
    return this.referenciadosRepository.create(referenciados);
  }

  @get('/referenciados/count', {
    responses: {
      '200': {
        description: 'Referenciados model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Referenciados) where?: Where<Referenciados>,
  ): Promise<Count> {
    return this.referenciadosRepository.count(where);
  }

  @get('/referenciados', {
    responses: {
      '200': {
        description: 'Array of Referenciados model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Referenciados, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Referenciados) filter?: Filter<Referenciados>,
  ): Promise<Referenciados[]> {
    return this.referenciadosRepository.find(filter);
  }

  @patch('/referenciados', {
    responses: {
      '200': {
        description: 'Referenciados PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Referenciados, {partial: true}),
        },
      },
    })
    referenciados: Referenciados,
    @param.where(Referenciados) where?: Where<Referenciados>,
  ): Promise<Count> {
    return this.referenciadosRepository.updateAll(referenciados, where);
  }

  @get('/referenciados/{id}', {
    responses: {
      '200': {
        description: 'Referenciados model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Referenciados, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Referenciados, {exclude: 'where'}) filter?: FilterExcludingWhere<Referenciados>
  ): Promise<Referenciados> {
    return this.referenciadosRepository.findById(id, filter);
  }

  @patch('/referenciados/{id}', {
    responses: {
      '204': {
        description: 'Referenciados PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Referenciados, {partial: true}),
        },
      },
    })
    referenciados: Referenciados,
  ): Promise<void> {
    await this.referenciadosRepository.updateById(id, referenciados);
  }

  @put('/referenciados/{id}', {
    responses: {
      '204': {
        description: 'Referenciados PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() referenciados: Referenciados,
  ): Promise<void> {
    await this.referenciadosRepository.replaceById(id, referenciados);
  }

  @del('/referenciados/{id}', {
    responses: {
      '204': {
        description: 'Referenciados DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.referenciadosRepository.deleteById(id);
  }
}
