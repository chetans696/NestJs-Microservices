import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  private readonly users: any[] = [];

  constructor(
    @Inject('SERVICE1') private readonly service1Proxy: ClientProxy,
    @Inject('SERVICE2') private readonly service2Proxy: ClientProxy,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  service1() {
    return this.service1Proxy.send({ cmd: 'get_service1' }, {});
  }

  service2() {
    return this.service2Proxy.send({ cmd: 'get_service2' }, {});
  }
}
