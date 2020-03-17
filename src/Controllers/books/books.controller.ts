import { Controller, Get, Post, Delete, Patch, Body } from '@nestjs/common';
import { bookDTO } from '../../DTO/books.dto'

@Controller('books')
export class BooksController {
  
    @Get()
  getAllBooks(): string {
    return 'todos os livros ';
  }

  @Post()
  saveBooks(@Body() newBook: bookDTO): bookDTO{
      return newBook;

  }

  @Patch()

  updatebook(): string{
      return ' livro atualizado '
  }

  @Delete()

  deleteBooks(): string{
      return 'livro deletado com sucessoo!'
  }
}
