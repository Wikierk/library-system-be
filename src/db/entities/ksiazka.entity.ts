import { Entity, PrimaryColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Jezyk } from './jezyk.entity';
import { KsiazkaAutor } from './ksiazka-autor.entity';
import { KsiazkaGatunek } from './ksiazka-gatunek.entity';
import { Wypozyczenie } from './wypozyczenia.entity';

@Entity('ksiazka')
export class Ksiazka {
  @PrimaryColumn()
  id: string;

  @Column({ unique: true })
  isbn: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  tytul: string;

  @Column({ type: 'date', nullable: true })
  dataPublikacji: Date;

  @ManyToOne(() => Jezyk, (jezyk) => jezyk.ksiazki)
  jezyk: Jezyk;

  @OneToMany(() => KsiazkaAutor, (ksiazkaAutor) => ksiazkaAutor.ksiazka)
  ksiazkaAutor: KsiazkaAutor[];

  @OneToMany(() => KsiazkaGatunek, (ksiazkaGatunek) => ksiazkaGatunek.ksiazka)
  ksiazkaGatunek: KsiazkaGatunek[];

  @OneToMany(() => Wypozyczenie, (wypozyczenie) => wypozyczenie.ksiazka)
  wypozyczenia: Wypozyczenie[];
}
