import {IsNotEmpty, IsString} from 'class-validator';

export class AuthorDTO{


    @IsNotEmpty()
    @IsString()
    readonly name: string;


    @IsNotEmpty()
    @IsString()
    readonly surName: string
}