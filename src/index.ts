import * as dotevnv from "dotenv";
import { startServer } from './app';

dotevnv.config();

startServer();