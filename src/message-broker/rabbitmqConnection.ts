import amqp, { Connection, Channel } from 'amqplib';
import { config } from '../config';

class RabbitMQConnector {
  private connection: Connection;
  private channel: Channel;
  
  constructor() {
    // Initialize to avoid "undefined" issues
    this.connection = {} as Connection;
    this.channel = {} as Channel;
  }

  async connect(): Promise<void> {
    try {
      this.connection = await amqp.connect(config.AMQP_URL);
      this.channel = await this.connection.createChannel();
    } catch (error) {
      console.error(`Error connecting to RabbitMQ: ${error}`);
      throw new Error('Unable to connect to RabbitMQ');
    }
  }

  getChannel(): Channel {
    return this.channel;
  }

  async closeConnection(): Promise<void> {
    try {
      if (this.connection) {
        await this.connection.close();
        // Optionally reset to empty object
        this.connection = {} as Connection;
        this.channel = {} as Channel;
      }
    } catch (error) {
      console.error(`Error closing RabbitMQ connection: ${error}`);
      throw new Error('Unable to close RabbitMQ connection');
    }
  }
}

export const rabbitMQConnector = new RabbitMQConnector();
