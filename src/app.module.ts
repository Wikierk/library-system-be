import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './ormConfig';
import { BooksModule } from './book/books.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), BooksModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
