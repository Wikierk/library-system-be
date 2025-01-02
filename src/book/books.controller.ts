import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { newBook } from './newBook.dto';
import { Ksiazka } from '../db/entities/ksiazka.entity';
import { Book } from './book.dto';
import { UpdateBook } from './updateBook.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly bookService: BooksService) {}

  @Post()
  async create(@Body() newBook: newBook): Promise<Ksiazka> {
    return this.bookService.create(newBook);
  }

  @Get()
  async getAll(): Promise<Book[]> {
    return this.bookService.getAll();
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateBook: UpdateBook) {
    return this.bookService.update(id, updateBook);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.bookService.remove(id);
  }
}
