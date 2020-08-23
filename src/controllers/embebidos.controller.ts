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
import {Embebidos} from '../models';
import {EmbebidosRepository} from '../repositories';

export class EmbebidosController {
  constructor(
    @repository(EmbebidosRepository)
    public embebidosRepository : EmbebidosRepository,
  ) {}

  @post('/embebidos', {
    responses: {
      '200': {
        description: 'Embebidos model instance',
        content: {'application/json': {schema: getModelSchemaRef(Embebidos)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Embebidos, {
            title: 'NewEmbebidos',
            
          }),
        },
      },
    })
    embebidos: Embebidos,
  ): Promise<Embebidos> {
    return this.embebidosRepository.create(embebidos);
  }

  @get('/embebidos/count', {
    responses: {
      '200': {
        description: 'Embebidos model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Embebidos) where?: Where<Embebidos>,
  ): Promise<Count> {
    return this.embebidosRepository.count(where);
  }

  @get('/embebidos', {
    responses: {
      '200': {
        description: 'Array of Embebidos model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Embebidos, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Embebidos) filter?: Filter<Embebidos>,
  ): Promise<Embebidos[]> {
    return this.embebidosRepository.find(filter);
  }

  @patch('/embebidos', {
    responses: {
      '200': {
        description: 'Embebidos PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Embebidos, {partial: true}),
        },
      },
    })
    embebidos: Embebidos,
    @param.where(Embebidos) where?: Where<Embebidos>,
  ): Promise<Count> {
    return this.embebidosRepository.updateAll(embebidos, where);
  }

  @get('/embebidos/{id}', {
    responses: {
      '200': {
        description: 'Embebidos model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Embebidos, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Embebidos, {exclude: 'where'}) filter?: FilterExcludingWhere<Embebidos>
  ): Promise<Embebidos> {
    return this.embebidosRepository.findById(id, filter);
  }

  @patch('/embebidos/{id}', {
    responses: {
      '204': {
        description: 'Embebidos PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Embebidos, {partial: true}),
        },
      },
    })
    embebidos: Embebidos,
  ): Promise<void> {
    await this.embebidosRepository.updateById(id, embebidos);
  }

  @put('/embebidos/{id}', {
    responses: {
      '204': {
        description: 'Embebidos PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() embebidos: Embebidos,
  ): Promise<void> {
    await this.embebidosRepository.replaceById(id, embebidos);
  }

  @del('/embebidos/{id}', {
    responses: {
      '204': {
        description: 'Embebidos DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.embebidosRepository.deleteById(id);
  }
}
