import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './book/1/book.module'; 

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nestjs-example'), 
    ConfigModule.forRoot(), 
    BookModule, 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
