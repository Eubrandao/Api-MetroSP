import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JourneyService } from './journey/journey.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, JourneyService],
})
export class AppModule {}
