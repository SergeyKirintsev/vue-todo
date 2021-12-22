const Todo = require('../models/todo');

const createTodo = (req, res, next) => {
  const { title, body } = req.body;

  Todo.create({ title, body })
    .then((data) => res.send(data))
    .catch((err) => next(err));
};

const getTodos = (req, res, next) => {
  Todo.find({})
    .then((data) => res.send({ data }))
    .catch(next);
};

const deleteTodo = (req, res, next) => {
  const { id } = req.params;

  Todo.findByIdAndRemove(id)
    .then((data) => {
      res.send({
        data,
        message: 'Удалено',
      });
    })
    .catch(next);
};

const toogleTodo = (req, res, next) => {
  const { id, completed } = req.body;

  Todo.findByIdAndUpdate(
    id,
    { completed },
    {
      new: true, // обработчик then получит на вход обновлённую запись
      runValidators: true, // данные будут валидированы перед изменением
    },
  )
    .then((data) => res.send(data))
    .catch((err) => {
      next(err);
    });
};

const updateTodo = (req, res, next) => {
  const { id, title, body } = req.body;
  console.log('updateTodo');

  Todo.findByIdAndUpdate(
    id,
    { title, body },
    {
      new: true, // обработчик then получит на вход обновлённую запись
      runValidators: true, // данные будут валидированы перед изменением
    },
  )
    .then((data) => res.send(data))
    .catch((err) => {
      next(err);
    });
};

module.exports = {
  createTodo,
  getTodos,
  deleteTodo,
  toogleTodo,
  updateTodo,
};
