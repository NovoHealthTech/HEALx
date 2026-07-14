import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';

interface ErrorResponse {
  error: string;
  message: string | string[];
  path: string;
  requestId?: string;
  statusCode: number;
  timestamp: string;
}

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost): void {
    const context = host.switchToHttp();
    const response = context.getResponse<Response>();
    const request = context.getRequest<Request>();
    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const body = this.getResponseBody(exception);

    response.status(status).json({
      error: body.error,
      message: body.message,
      path: request.originalUrl,
      requestId: request.id,
      statusCode: status,
      timestamp: new Date().toISOString(),
    } satisfies ErrorResponse);
  }

  private getResponseBody(exception: unknown): Pick<ErrorResponse, 'error' | 'message'> {
    if (!(exception instanceof HttpException)) {
      return {
        error: 'InternalServerError',
        message: 'An unexpected error occurred.',
      };
    }

    const response = exception.getResponse();

    if (typeof response === 'string') {
      return {
        error: exception.name,
        message: response,
      };
    }

    if (this.isExceptionBody(response)) {
      return {
        error: response.error ?? exception.name,
        message: response.message ?? exception.message,
      };
    }

    return {
      error: exception.name,
      message: exception.message,
    };
  }

  private isExceptionBody(value: unknown): value is {
    error?: string;
    message?: string | string[];
  } {
    return typeof value === 'object' && value !== null;
  }
}
