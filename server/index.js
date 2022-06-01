import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use('/posts', postRoutes);

const CONNEXION_URL =
  'mongodb+srv://KevinO:ShenZhen%40518@cluster0.8litn.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNEXION_URL)
  .then(() =>
    app.listen(PORT, () => console.log(`Serveur connecté sur le port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));
