// src/index.ts
import express, { Application } from 'express';
import bodyParser from 'body-parser';
import productsRouter from './routes/products';

const app: Application = express();
const port = 3000;

app.use(bodyParser.json());

// Use the products router
app.use('/api/products', productsRouter);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

export default app;
