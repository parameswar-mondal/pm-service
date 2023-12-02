import { Channel } from 'amqplib';
import { config } from '../config';
import { rabbitMQConnector } from '../message-broker/rabbitmqConnection';

const QUEUE_NAME = config.QUEUE_NAME;

export const RabbitMQService = {
  sendMessage: async (message: string): Promise<string> => {
    try {
      await rabbitMQConnector.connect();
      const channel: Channel = rabbitMQConnector.getChannel();

      await channel.assertQueue(QUEUE_NAME, { durable: false });
      await channel.sendToQueue(QUEUE_NAME, Buffer.from(message));

      console.log(`[RabbitMQ] Sent message: ${message}`);

      return message;
    } catch (error) {
      console.error('Error in RabbitMQService:', error);
      throw new Error('Failed to send message to RabbitMQ');
    }
  },
};
