import express from 'express';

const app = express();
const port = process.env.PORT ?? 3000;

app.get('/', (req, res) => {
  res.send('node is running');
});

app.listen(port, () => {
  console.info(`Listening at port ${port}`);
});
