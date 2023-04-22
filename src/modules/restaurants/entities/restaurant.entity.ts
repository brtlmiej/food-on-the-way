import { AbstractEntity } from '../../../common/entities/abstract-entity.class';
import { Column, Entity } from 'typeorm';

@Entity()
export class Restaurant extends AbstractEntity {
  @Column({ length: 200 })
  name: string;

  @Column({ length: 300 })
  address: string;

  @Column({ type: 'geography' })
  latitude: number;

  @Column({ type: 'geography' })
  longitude: number;
}
