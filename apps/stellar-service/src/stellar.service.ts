import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Horizon } from '@stellar/stellar-sdk';

@Injectable()
export class StellarService {
  constructor(private readonly config: ConfigService) {}

  getNetwork() {
    const horizonUrl = this.config.get<string>(
      'STELLAR_HORIZON_URL',
      'https://horizon-testnet.stellar.org',
    );
    const server = new Horizon.Server(horizonUrl);

    return {
      horizonUrl,
      network: this.config.get<string>('STELLAR_NETWORK', 'testnet'),
      serverUrl: server.serverURL.toString(),
    };
  }
}
