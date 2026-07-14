import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { healxConfig } from '@healx/config';
import { HealthController } from './health.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      load: [healxConfig],
    }),
  ],
  controllers: [HealthController],
})
export class AppModule {}
