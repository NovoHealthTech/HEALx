import { Controller, Get } from '@nestjs/common';
import { HealthResponse } from '@healx/types';

@Controller('health')
export class HealthController {
  @Get()
  check(): HealthResponse {
    return {
      service: 'api',
      status: 'ok',
      timestamp: new Date().toISOString(),
    };
  }
}
