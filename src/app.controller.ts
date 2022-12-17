import { Controller, Get, Body, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { JourneyService } from './journey/journey.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly journeyService: JourneyService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/journey')
    getJourney(@Body()data:string):any{
    return  this.journeyService.calcJourney(data)
  }
}
