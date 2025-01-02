import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Czytelnik } from './czytelnik.entity';
import { Ksiazka } from './ksiazka.entity';
import { Pracownik } from './pracownik.entity';

@Entity('wypozyczenie')
export class Wypozyczenie {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Czytelnik, (czytelnik) => czytelnik.wypozyczenia)
  czytelnik: Czytelnik;

  @ManyToOne(() => Ksiazka, (ksiazka) => ksiazka.wypozyczenia)
  ksiazka: Ksiazka;

  @ManyToOne(() => Pracownik, (pracownik) => pracownik.wypozyczenia)
  pracownik: Pracownik;

  @Column({ type: 'date', nullable: true })
  dataWypozyczenia: Date;
}
