import { Controller, Get } from '@nestjs/common';
import { StellarService } from './stellar.service';

@Controller('stellar')
export class StellarController {
  constructor(private readonly stellarService: StellarService) {}

  @Get('network')
  network() {
    return this.stellarService.getNetwork();
  }
}
