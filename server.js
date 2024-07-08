const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');

dotenv.config();

const authRouter = require('./routes/auth');
const notesRouter = require('./routes/notes');

const app = express();
const PORT = process.env.PORT || 3000;

const allowedOrigins = ['http://localhost:3000', 'https://filipbabic.github.io/','http://192.168.100.35:8080'];

const corsOptions = {
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps, curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  credentials: true,
  optionsSuccessStatus: 204
};

app.use(cors(corsOptions));
app.use(express.json());
app.use('/api', authRouter);
app.use('/api', notesRouter);
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

mongoose.connect(process.env.MONGODB_URI)
.then(() => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch(error => {
  console.error('Connection error', error);
});
