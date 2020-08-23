import {Entity, model, property} from '@loopback/repository';

@model()
export class Referenciados extends Entity {
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
  Referenciado_id: string;

  @property({
    type: 'string',
  })
  dato_simple?: string;

  @property({
    type: 'number',
  })
  data1?: number;

  @property({
    type: 'string',
  })
  data2?: string;


  constructor(data?: Partial<Referenciados>) {
    super(data);
  }
}

export interface ReferenciadosRelations {
  // describe navigational properties here
}

export type ReferenciadosWithRelations = Referenciados & ReferenciadosRelations;
