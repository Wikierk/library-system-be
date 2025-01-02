import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Ksiazka } from './ksiazka.entity';

@Entity('jezyk')
export class Jezyk {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50 })
  nazwa: string;

  @OneToMany(() => Ksiazka, (ksiazka) => ksiazka.jezyk)
  ksiazki: Ksiazka[];
}
