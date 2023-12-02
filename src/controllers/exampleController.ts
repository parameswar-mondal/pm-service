import { Request, Response } from 'express';
import { ExampleService } from '../services/exampleService';

export const getExample = async (req: Request, res: Response): Promise<void> => {
  try {
    const data = await ExampleService.getData();
    res.json({ message: 'Hello from controller', data });
  } catch (error) {
    console.error('Error in ExampleController:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
