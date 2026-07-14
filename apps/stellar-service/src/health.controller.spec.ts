import { HealthController } from './health.controller';

describe('HealthController', () => {
  it('returns Stellar service health status', () => {
    const controller = new HealthController();

    expect(controller.check()).toMatchObject({
      service: 'stellar-service',
      status: 'ok',
    });
  });
});
