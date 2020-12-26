import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getNest(): string {
    let i = 0;
    while (i < 1000000) {
      i++;
    }
    return 'hello Nest';
  }
}
