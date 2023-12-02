import { Request, Response, NextFunction } from "express";
import HttpException from "../common/http-exception";

// error handling middleware to catch and handle errors, including 404 errors

export const errorHandler = (err: HttpException, req: Request, res: Response, next: NextFunction) => {
  const status = err.statusCode || err.status || 500;
  const message = err.message || 'Internal Server Error';

  res.status(status).json({
    status,
    message: message
  });

  next();
};