import { Injectable } from '@nestjs/common';
import { Book } from './book/1/book.model';

@Injectable()
export class AppService {
  getHello(): string {
    return 'This is my NestJS application!';
  }
}

@Injectable()
export class BookService {
  findAll(): Book[] {
    return [];
  }

  findById(id: string): Book {
    return null;
  }

  create(book: any): Book {
    return null;
  }

  deleteById(id: string): Book {
    return null;
  }
}
