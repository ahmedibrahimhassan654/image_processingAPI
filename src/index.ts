import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import helmet from 'helmet';

//import routes from './routes';
import imagerout from './routes/image';
import errorMiddleware from './middelware/errormiddleware';

const app = express();

// Load env vars
dotenv.config({ path: './config.env' });
// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

const PORT = process.env.PORT || 5000;

//mideelware for post JSON BODY
app.use(express.json());
// HTTP security middleware headers
app.use(helmet());
// Mount routers
app.use('/api/images', imagerout);

// error handler middleware
app.use(errorMiddleware);

app.listen(PORT, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

export default app;
