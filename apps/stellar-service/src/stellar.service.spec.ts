import { ConfigService } from '@nestjs/config';
import { StellarService } from './stellar.service';

describe('StellarService', () => {
  it('returns configured Stellar network details', () => {
    const service = new StellarService(
      new ConfigService({
        STELLAR_HORIZON_URL: 'https://horizon-testnet.stellar.org',
        STELLAR_NETWORK: 'testnet',
      }),
    );

    expect(service.getNetwork()).toMatchObject({
      horizonUrl: 'https://horizon-testnet.stellar.org',
      network: 'testnet',
    });
  });
});
