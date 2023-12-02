import { Express, Router } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import { applicationRoute } from '../common/app-route';
import { notFoundHandler } from '../middleware/notFoundHandler';
import { errorHandler } from '../middleware/errorHandler';

export const applyCommonMiddleware = (app: Express, routes: Router) => {
  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(helmet());

  applicationRoute(app, routes);
};

export const applyErrorMiddleware = (app: Express) => {
  // catch 404 and forward to error handler
  app.use(notFoundHandler);
  // Error Handling Middleware
  app.use(errorHandler);
};
