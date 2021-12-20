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

module.exports = {
  createTodo,
  getTodos,
  deleteTodo,
};
