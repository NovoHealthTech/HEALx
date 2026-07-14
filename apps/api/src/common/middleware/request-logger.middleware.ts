import { randomUUID } from 'crypto';
import { NextFunction, Request, Response } from 'express';

export function requestLogger(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  const requestId = request.header('x-request-id') ?? randomUUID();
  request.id = requestId;
  response.setHeader('x-request-id', requestId);

  const startedAt = Date.now();

  response.on('finish', () => {
    const durationMs = Date.now() - startedAt;

    console.info(
      JSON.stringify({
        durationMs,
        method: request.method,
        path: request.originalUrl,
        requestId,
        statusCode: response.statusCode,
      }),
    );
  });

  next();
}
