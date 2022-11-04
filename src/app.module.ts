import {Module} from '@nestjs/common';
import {ClientsModule, Transport} from '@nestjs/microservices';
import {AppController} from "./app.controller";
import {AppService} from "./app.service";
//mqtt서버의 기본 접속 정보를 등록하는 곳
//아이디와 비밀번호를 등록해줍니다.
@Module({
  imports: [
      ClientsModule.register([
        {
          name:'TEST_CLIENT',
          transport: Transport.MQTT,
          options: {
            host: 'localhost',
            port:1883,
            clientId: 'id',
            password:'password'
          }
        },
      ]),
  ],
  controllers: [AppController],
  providers:[AppService],
})
export class AppModule {
  constructor() {
  }
}
