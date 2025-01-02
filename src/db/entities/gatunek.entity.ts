import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { KsiazkaGatunek } from './ksiazka-gatunek.entity';

@Entity('gatunek')
export class Gatunek {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50 })
  nazwa: string;

  @OneToMany(() => KsiazkaGatunek, (ksiazkaGatunek) => ksiazkaGatunek.gatunek)
  ksiazkaGatunek: KsiazkaGatunek[];
}
