import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Pracownik } from './pracownik.entity';

@Entity('stanowisko')
export class Stanowisko {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50, nullable: true })
  nazwa: string;

  @OneToMany(() => Pracownik, (pracownik) => pracownik.stanowisko)
  pracownicy: Pracownik[];
}
