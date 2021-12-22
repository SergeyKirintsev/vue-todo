const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');

const {
  createTodo,
  getTodos,
  deleteTodo,
  toogleTodo,
  updateTodo,
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

router.patch(
  '/completed',
  celebrate({
    body: Joi.object().keys({
      id: Joi.string().length(24).hex(),
      completed: Joi.boolean().required(),
    }),
  }),
  toogleTodo,
);

router.patch(
  '/',
  celebrate({
    body: Joi.object().keys({
      id: Joi.string().length(24).hex(),
      title: Joi.string().required(),
      body: Joi.string().required(),
    }),
  }),
  updateTodo,
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
