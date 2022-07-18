import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
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

// add middleware to for static files
app.use('/images', express.static(path.join(__dirname, 'images')));

// set up template engine and set the directory
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));

// HTTP security middleware headers
app.use(helmet());
// Mount routers
app.use('/api/images', imagerout);

// error handler middleware
app.use(errorMiddleware);

app.listen(PORT, () => {
  if (process.env.NODE_ENV === 'development') {
    console.log(
      `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
    );
  } else if (process.env.NODE_ENV === 'production') {
    console.log(
      `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
    );
  }
  // console.log(process.env.NODE_ENV);
});

export default app;
