import { Entity, PrimaryColumn, ManyToOne } from 'typeorm';
import { Gatunek } from './gatunek.entity';
import { Ksiazka } from './ksiazka.entity';

@Entity('ksiazka_gatunek')
export class KsiazkaGatunek {
  @PrimaryColumn()
  gatunekId: number;

  @PrimaryColumn({ type: 'varchar', length: 17 })
  ksiazkaIsbn: string;

  @ManyToOne(() => Gatunek, (gatunek) => gatunek.ksiazkaGatunek)
  gatunek: Gatunek;

  @ManyToOne(() => Ksiazka, (ksiazka) => ksiazka.ksiazkaGatunek)
  ksiazka: Ksiazka;
}
