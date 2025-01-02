import { Entity, PrimaryColumn, ManyToOne } from 'typeorm';
import { Autor } from './autor.entity';
import { Ksiazka } from './ksiazka.entity';

@Entity('ksiazka_autor')
export class KsiazkaAutor {
  @PrimaryColumn({ type: 'char', length: 36 })
  autorId: string;

  @PrimaryColumn({ type: 'varchar', length: 17 })
  ksiazkaIsbn: string;

  @ManyToOne(() => Autor, (autor) => autor.ksiazkaAutor)
  autor: Autor;

  @ManyToOne(() => Ksiazka, (ksiazka) => ksiazka.ksiazkaAutor)
  ksiazka: Ksiazka;
}
