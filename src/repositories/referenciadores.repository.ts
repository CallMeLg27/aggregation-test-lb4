import {DefaultCrudRepository} from '@loopback/repository';
import {Referenciadores, ReferenciadoresRelations} from '../models';
import {LocalmongoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ReferenciadoresRepository extends DefaultCrudRepository<
  Referenciadores,
  typeof Referenciadores.prototype.Referenciador_id,
  ReferenciadoresRelations
> {
  constructor(
    @inject('datasources.localmongo') dataSource: LocalmongoDataSource,
  ) {
    super(Referenciadores, dataSource);
  }
}
