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
  getFilterSchemaFor
} from '@loopback/rest';
import {Referenciadores} from '../models';
import {ReferenciadoresRepository} from '../repositories';

export class RefrenciadoresController {
  constructor(
    @repository(ReferenciadoresRepository)
    public referenciadoresRepository : ReferenciadoresRepository,
  ) {}

  @post('/referenciadores', {
    responses: {
      '200': {
        description: 'Referenciadores model instance',
        content: {'application/json': {schema: getModelSchemaRef(Referenciadores)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Referenciadores, {
            title: 'NewReferenciadores',
            
          }),
        },
      },
    })
    referenciadores: Referenciadores,
  ): Promise<Referenciadores> {
    return this.referenciadoresRepository.create(referenciadores);
  }

  @get('/referenciadores/count', {
    responses: {
      '200': {
        description: 'Referenciadores model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Referenciadores) where?: Where<Referenciadores>,
  ): Promise<Count> {
    return this.referenciadoresRepository.count(where);
  }

  @get('/lookup', {
    responses: {
      '200': {
        description: 'lookup',
        }
      },
  })
  async lookup(
    @param.filter(Referenciadores) filter?: Filter<Referenciadores>,
  ): Promise<Referenciadores[]> {
    return (this.referenciadoresRepository.dataSource.connector as any)
    .collection("Referenciadores")
    .aggregate([
      {
        $lookup:{
          from: "Referenciados",
          localField: "Referenciado_id",
          foreignField: "Referenciado_id",
          as: "referenciado"
        }
      }
      ])
    .get();
  }

  @get('/referenciadores', {
    responses: {
      '200': {
        description: 'Array of Referenciadores model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Referenciadores, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Referenciadores) filter?: Filter<Referenciadores>,
  ): Promise<Referenciadores[]> {
    return this.referenciadoresRepository.find(filter);
  }

  @patch('/referenciadores', {
    responses: {
      '200': {
        description: 'Referenciadores PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Referenciadores, {partial: true}),
        },
      },
    })
    referenciadores: Referenciadores,
    @param.where(Referenciadores) where?: Where<Referenciadores>,
  ): Promise<Count> {
    return this.referenciadoresRepository.updateAll(referenciadores, where);
  }

  @get('/referenciadores/{id}', {
    responses: {
      '200': {
        description: 'Referenciadores model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Referenciadores, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Referenciadores, {exclude: 'where'}) filter?: FilterExcludingWhere<Referenciadores>
  ): Promise<Referenciadores> {
    return this.referenciadoresRepository.findById(id, filter);
  }

  @patch('/referenciadores/{id}', {
    responses: {
      '204': {
        description: 'Referenciadores PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Referenciadores, {partial: true}),
        },
      },
    })
    referenciadores: Referenciadores,
  ): Promise<void> {
    await this.referenciadoresRepository.updateById(id, referenciadores);
  }

  @put('/referenciadores/{id}', {
    responses: {
      '204': {
        description: 'Referenciadores PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() referenciadores: Referenciadores,
  ): Promise<void> {
    await this.referenciadoresRepository.replaceById(id, referenciadores);
  }

  @del('/referenciadores/{id}', {
    responses: {
      '204': {
        description: 'Referenciadores DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.referenciadoresRepository.deleteById(id);
  }
}
