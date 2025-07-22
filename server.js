import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import onboardingRouter from './routes/onboardingRoute';

const app = express();

app.get('/', (req, res) => {
  res.send({ message: 'welcome to dev date api' });
});

app.use('/', onboardingRouter);

app.listen(process.env.PORT, () => {
  console.log(
    `server listening on ${process.env.PROTOCOL}://${process.env.HOST}:${process.env.PORT}/`
  );
});
