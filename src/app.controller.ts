import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ConnectionService } from './neo4j/connection.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly connectionService: ConnectionService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/journey')
  async getTeste(): Promise<string> {
    return this.connectionService.read()
  }
}
