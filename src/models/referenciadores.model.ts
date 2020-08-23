import {Entity, model, property} from '@loopback/repository';

@model()
export class Referenciadores extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  id: string;

  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  Referenciador_id: string;

  @property({
    type: 'string',
  })
  Referenciado_id?: string;

  @property({
    type: 'string',
  })
  dato_simple?: string;


  constructor(data?: Partial<Referenciadores>) {
    super(data);
  }
}

export interface ReferenciadoresRelations {
  // describe navigational properties here
}

export type ReferenciadoresWithRelations = Referenciadores & ReferenciadoresRelations;
