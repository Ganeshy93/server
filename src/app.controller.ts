import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { Book } from './book/1/schemas/book.schema'
import { BookService } from './book/1/book.service'; 
import { CreateBookDto } from './book/1/dto/create-book.dto';
import { UpdateBookDto } from './book/1/dto/update-book.dto';

@Controller()

export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly bookService: BookService, 
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('books') 
  async getAllBooks(): Promise<Book[]> {
    return this.bookService.findAll();
  }

  @Post('books') 
  async createBook(
    @Body() book: CreateBookDto, 
  ): Promise<Book> {
    return this.bookService.create(book);
  }

  @Get('books/:id') 
  async getBook(
    @Param('id') id: string,
  ): Promise<Book> {
    return this.bookService.findById(id);
  }

  @Put('books/:id') 
  async updateBook(
    @Param('id') id: string,
    @Body() book: UpdateBookDto, 
  ): Promise<Book> {
    return this.bookService.updateById(id, book);
  }

  @Delete('books/:id') 
  async deleteBook(
    @Param('id') id: string,
  ): Promise<Book> {
    return this.bookService.deleteById(id);
  }
}
