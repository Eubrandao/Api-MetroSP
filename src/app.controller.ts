import { Controller, Get, Body, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ConnectionService } from './neo4j/connection.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly connectionService: ConnectionService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/journey')
    getJourney(@Body()data:string):any{
    return  this.connectionService.calcJourney(data)
  }
}
