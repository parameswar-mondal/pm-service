import { Express, Router } from 'express';

export const applicationRoute = (app: Express, routes: Router) => {
  app.use('/api/v1', routes);
};
