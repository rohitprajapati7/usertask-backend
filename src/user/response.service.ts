import { Injectable } from '@nestjs/common';

@Injectable()
export class ResponseService {
  static success(data: any, statusCode = 200, message = 'Request successful') {
    return {
      success: true,
      statusCode,
      data,
      message,
    };
  }

  static error(message = 'Request failed', errorCode = 'GENERIC_ERROR') {
    return {
      success: false,
      message,
      errorCode,
    };
  }
}
