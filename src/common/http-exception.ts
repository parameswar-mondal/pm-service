
export default class HttpException extends Error {
  statusCode?: number;
  status?: number;
  message: string;
  error: string | null;
  
  constructor(message: string, statusCode?: number, error?: string) {
    super(message);
  
    this.statusCode = statusCode || 500;
    this.message = message;
    this.error = error || null;
  }
}