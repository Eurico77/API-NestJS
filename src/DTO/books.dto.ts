import { IsNotEmpty, IsString, IsNumber, IsPositive , IsNotEmptyObject, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { AuthorDTO} from '../DTO/authorDTO';

export class bookDTO {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @Type(()=> AuthorDTO )
  @IsNotEmptyObject({each: true})
  @ValidateNested({each: true})
  readonly author: AuthorDTO[];

  @IsNotEmpty()
  @IsString()
  readonly language: string;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  readonly releaseYear: Number;

  @IsNotEmpty()
  @IsString()
  readonly publisher: string;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  readonly pages: number;
}
