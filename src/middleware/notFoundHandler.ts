import { Request, Response, NextFunction } from "express";
import HttpException from "../common/http-exception";

/**
 * By defining and using these middleware functions, any time a 404 error occurs in this Express.js application, 
 * the error will be forwarded to the error handler middleware, allowing you to handle the error appropriately.
 */

export const notFoundHandler = (req: Request, res: Response, next: NextFunction) => {
  const error = new HttpException('Not Found');
  error.statusCode = 404;
  next(error);
};