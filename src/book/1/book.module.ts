import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BookSchema } from './schemas/book.schema';
import { BookService } from './book.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Book', schema: BookSchema }]), // Import BookSchema into MongooseModule
  ],
  providers: [BookService], // Provide BookService
  exports: [BookService], // Export BookService if needed
})
export class BookModule {}
