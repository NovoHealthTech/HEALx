export interface HealxConfig {
  apiPort: number;
  nodeEnv: string;
  stellar: {
    horizonUrl: string;
    network: string;
    servicePort: number;
  };
}

export const healxConfig = (): HealxConfig => ({
  apiPort: Number(process.env.API_PORT ?? 3000),
  nodeEnv: process.env.NODE_ENV ?? 'development',
  stellar: {
    horizonUrl:
      process.env.STELLAR_HORIZON_URL ?? 'https://horizon-testnet.stellar.org',
    network: process.env.STELLAR_NETWORK ?? 'testnet',
    servicePort: Number(process.env.STELLAR_SERVICE_PORT ?? 3001),
  },
});
