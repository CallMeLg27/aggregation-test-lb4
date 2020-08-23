import {DefaultCrudRepository} from '@loopback/repository';
import {Embebidos, EmbebidosRelations} from '../models';
import {LocalmongoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class EmbebidosRepository extends DefaultCrudRepository<
  Embebidos,
  typeof Embebidos.prototype.Embebido_id,
  EmbebidosRelations
> {
  constructor(
    @inject('datasources.localmongo') dataSource: LocalmongoDataSource,
  ) {
    super(Embebidos, dataSource);
  }
}
