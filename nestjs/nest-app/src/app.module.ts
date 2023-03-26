import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ClientService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [ClientService],
})
export class AppModule {}
