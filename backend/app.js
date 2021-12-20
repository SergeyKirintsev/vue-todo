require('dotenv').config();
const helmet = require('helmet');
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const { errors } = require('celebrate');

const errorsHandler = require('./errors/errorsHandler');

const { NotFoundError } = require('./errors/not-found-err');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const mycors = require('./middlewares/cors');

const { PORT = 3000 } = process.env;

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(helmet());
app.use(requestLogger);

app.use(mycors);

mongoose.connect('mongodb://localhost:27017/todo', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.use('/todos', require('./routes/todos'));

app.use('*', () => {
  throw new NotFoundError('Страница не найдена');
});

app.use(errorLogger);

app.use(errors()); // обработчик ошибок celebrate

app.use(errorsHandler);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server run on port ${PORT}...`);
});
