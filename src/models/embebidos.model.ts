import {Entity, model, property} from '@loopback/repository';

@model()
export class Embebidos extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  id: string;

  @property({
    type: 'string',
    generated: false,
    required: true,
  })
  Embebido_id: string;

  @property({
    type: 'string',
  })
  dato_simple?: string;

  @property({
    type: 'array',
    itemType: 'string',
  })
  array_strings?: string[];

  @property({
    type: 'array',
    itemType: 'object',
  })
  array_objetos?: object[];


  constructor(data?: Partial<Embebidos>) {
    super(data);
  }
}

export interface EmbebidosRelations {
  // describe navigational properties here
}

export type EmbebidosWithRelations = Embebidos & EmbebidosRelations;
