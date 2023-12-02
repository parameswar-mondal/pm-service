import express from 'express';
import * as http from 'http';
import routes from './routes';
import { applyCommonMiddleware, applyErrorMiddleware } from './utility/index';

const applicationServer = () => {
  const app = express();

  applyCommonMiddleware(app, routes);

  applyErrorMiddleware(app);

  const server = http.createServer(app);
  const PORT = process.env.PORT || 3001;

  server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });

};

export const startServer = async () => {
  try {
    applicationServer();
  } catch(error){
    console.error('Error in RabbitMQService:', error);
    throw error;
  }
};