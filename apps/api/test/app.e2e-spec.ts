import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import request from 'supertest';
import { AppModule } from '../src/app.module';
import { HttpExceptionFilter } from '../src/common/filters/http-exception.filter';
import { requestLogger } from '../src/common/middleware/request-logger.middleware';

describe('API health (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleRef.createNestApplication();
    app.use(requestLogger);
    app.useGlobalFilters(new HttpExceptionFilter());
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('/health (GET)', async () => {
    await request(app.getHttpServer())
      .get('/health')
      .set('x-request-id', 'test-request-id')
      .expect('x-request-id', 'test-request-id')
      .expect(200)
      .expect(({ body }) => {
        expect(body).toMatchObject({
          service: 'api',
          status: 'ok',
        });
        expect(body.timestamp).toEqual(expect.any(String));
      });
  });
});
