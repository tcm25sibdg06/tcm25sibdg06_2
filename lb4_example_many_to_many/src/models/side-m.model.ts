import {Entity, model, property, hasMany} from '@loopback/repository';
import {SideN} from './side-n.model';
import {Through} from './through.model';

@model()
export class SideM extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @hasMany(() => SideN, {through: {model: () => Through}})
  sideNS: SideN[];

  constructor(data?: Partial<SideM>) {
    super(data);
  }
}

export interface SideMRelations {
  // describe navigational properties here
}

export type SideMWithRelations = SideM & SideMRelations;
