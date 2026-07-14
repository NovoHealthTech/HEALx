import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { healxConfig } from '@healx/config';
import { HealthController } from './health.controller';
import { StellarController } from './stellar.controller';
import { StellarService } from './stellar.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      load: [healxConfig],
    }),
  ],
  controllers: [HealthController, StellarController],
  providers: [StellarService],
})
export class AppModule {}
