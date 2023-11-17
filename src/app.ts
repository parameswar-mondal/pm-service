import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

class App {
  public express: Express;

  constructor () {
    this.express = express();
    this.mountRoutes();
  }

  private mountRoutes (): void {
    const router = express.Router();
    router.get('/', (req: Request, res: Response) => {
      res.json({
        message: 'Hello World!'
      });
    });
    this.express.use('/', router);
  }
}

export default new App().express;