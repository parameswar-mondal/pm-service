import { Request, Response, NextFunction } from 'express';

const home = async (req: Request, res: Response, next: NextFunction) => {
  try {
    return res.status(200).json({ message: 'Welcome to Home' });
  } catch (err) {
    console.error('Error in home function:', err);
    next(err);
  }
};

export { home };
