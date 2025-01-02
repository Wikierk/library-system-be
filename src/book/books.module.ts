import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { Ksiazka } from '../db/entities/ksiazka.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ksiazka])],
  controllers: [BooksController],
  providers: [BooksService],
})
export class BooksModule {}
