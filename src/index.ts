import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';

const app = express();
// Load env vars
dotenv.config({ path: './config.env' });
// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

const PORT = process.env.PORT || 5000;
app.get('/api', (req, res) => {
  res.send('Hello, world!');
});
app.listen(PORT, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
