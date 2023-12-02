import { ExampleModel } from '../models/exampleModel';
import { RabbitMQService } from './rabbitmqService';

export const ExampleService = {
  getData: async (): Promise<ExampleModel> => {
    try {
      const message = await RabbitMQService.sendMessage('Hello from service');
      return { message };
    } catch (error) {
      console.error('Error in ExampleService:', error);
      throw new Error('Internal Server Error');
    }
  },
};
