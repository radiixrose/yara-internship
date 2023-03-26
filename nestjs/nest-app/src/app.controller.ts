import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ClientService } from './app.service';

@Controller('clients')
export class AppController {
  constructor(private readonly clientService: ClientService) {}

  @Get()
  async findAll() {
    return this.clientService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.clientService.findById(id);
  }

  @Post()
  async createClient(@Body() client: any) {
    return this.clientService.createClient(client);
  }

  @Put()
  async updateClient(@Body() client: any) {
    return this.clientService.updateClient(client);
  }

  @Delete(':id')
  async deleteById(@Param('id') id: string) {
    return await this.clientService.deleteById(id);
  }
}
