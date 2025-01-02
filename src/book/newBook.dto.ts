import { IsString, IsDate, IsNotEmpty, IsInt } from 'class-validator';

export class newBook {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  isbn: string;

  @IsString()
  @IsNotEmpty()
  tytul: string;

  @IsDate()
  dataPublikacji: Date;

  @IsInt()
  @IsNotEmpty()
  jezykId: number;
}
