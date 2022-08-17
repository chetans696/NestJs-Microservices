import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('microservice1')
  service1() {
    return this.appService.service1();
  }

  @Get('microservice2')
  service2() {
    return this.appService.service2();
  }
}
