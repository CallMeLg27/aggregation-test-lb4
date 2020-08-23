import {DefaultCrudRepository} from '@loopback/repository';
import {Referenciados, ReferenciadosRelations} from '../models';
import {LocalmongoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ReferenciadosRepository extends DefaultCrudRepository<
  Referenciados,
  typeof Referenciados.prototype.Referenciado_id,
  ReferenciadosRelations
> {
  constructor(
    @inject('datasources.localmongo') dataSource: LocalmongoDataSource,
  ) {
    super(Referenciados, dataSource);
  }
}
