import { Request, Response, NextFunction } from 'express';
import SendAppResponse from '@utils/sendAppResponse';
import { StatusCodes } from 'http-status-codes';

function errorHandler(err: Error, _: Request, res: Response, next: NextFunction): void {
  console.log('error here');
  const status: number = StatusCodes.BAD_REQUEST;
  const message: string = err.message;

  SendAppResponse(res, null, status, message);

  next();
}

export default errorHandler;
