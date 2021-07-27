import express from 'express';
import TodoValidator from '../validator';
import Middleware from '../../middleware';
import UsersController from '../controller';

const router = express.Router();

router.post(
	'/create',
	TodoValidator.checkCreateUsers(),
	Middleware.handleValidationError,
	UsersController.create
);

router.get(
	'/read',
	TodoValidator.checkReadUsers(),
	Middleware.handleValidationError,
	UsersController.readPagination
);

router.get(
	'/read/:id',
	TodoValidator.checkIdParam(),
	Middleware.handleValidationError,
	UsersController.readByID
);

router.put(
	'/update',
	TodoValidator.checkIdParam(),
	Middleware.handleValidationError,
	UsersController.update
);

router.delete(
	'/delete',
	TodoValidator.checkIdParam(),
	Middleware.handleValidationError,
	UsersController.delete
);

export default router;
