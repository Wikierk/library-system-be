import { IsOptional, IsString, IsISBN, IsDate } from 'class-validator';

export class UpdateBook {
  @IsOptional()
  @IsString()
  tytul?: string;

  @IsOptional()
  @IsISBN()
  isbn?: string;

  @IsOptional()
  @IsDate()
  dataPublikacji?: Date;
}
