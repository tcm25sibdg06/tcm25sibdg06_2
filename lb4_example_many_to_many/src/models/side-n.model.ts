import {Entity, model, property, hasMany} from '@loopback/repository';
import {SideM} from './side-m.model';
import {Through} from './through.model';

@model()
export class SideN extends Entity {
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

  @hasMany(() => SideM, {through: {model: () => Through}})
  sideMS: SideM[];

  constructor(data?: Partial<SideN>) {
    super(data);
  }
}

export interface SideNRelations {
  // describe navigational properties here
}

export type SideNWithRelations = SideN & SideNRelations;
