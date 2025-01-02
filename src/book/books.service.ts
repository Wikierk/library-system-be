import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Ksiazka } from '../db/entities/ksiazka.entity';
import { newBook } from './newBook.dto';
import { Book } from './book.dto';
import { UpdateBook } from './updateBook.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Ksiazka)
    private readonly bookRepository: Repository<Ksiazka>,
  ) {}

  async create(newBook: newBook): Promise<Ksiazka> {
    const book = new Book();
    book.id = uuidv4();
    Object.assign(book, newBook);
    return await this.bookRepository.save(book);
  }

  async getAll(): Promise<Book[]> {
    const books = await this.bookRepository.find();
    return books.map((book) => ({
      id: book.id,
      isbn: book.isbn,
      tytul: book.tytul,
      dataPublikacji: book.dataPublikacji,
    }));
  }

  async update(id: string, updateBook: UpdateBook): Promise<Ksiazka> {
    const book = await this.bookRepository.findOneBy({ id });
    if (!book) {
      throw new NotFoundException(`Książka o ISBN ${id} nie istnieje`);
    }

    Object.assign(book, updateBook);
    return this.bookRepository.save(book);
  }

  async remove(id: string): Promise<void> {
    const result = await this.bookRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Książka o isbn ${id} nie istnieje`);
    }
  }
}
