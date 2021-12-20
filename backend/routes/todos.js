const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');

const {
  createTodo,
  getTodos,
  deleteTodo,
} = require('../controllers/todos');

router.delete(
  '/:id',
  celebrate({
    params: Joi.object().keys({
      id: Joi.string().length(24).hex(),
    }),
  }),
  deleteTodo,
);

router.get('/', getTodos);

router.post(
  '/',
  celebrate({
    body: Joi.object().keys({
      title: Joi.string().required(),
      body: Joi.string().required(),
    }),
  }),
  createTodo,
);

module.exports = router;
