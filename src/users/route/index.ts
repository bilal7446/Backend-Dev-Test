import express from 'express';
import UsersValidator from '../validator';
import Middleware from '../../middleware';
import UsersController from '../controller';

const router = express.Router();

router.post(
	'/create',
	UsersValidator.checkCreateUsers(),
	Middleware.handleValidationError,
	UsersController.create
);

router.get(
	'/read',
	UsersValidator.checkReadUsers(),
	Middleware.handleValidationError,
	UsersController.readPagination
);

router.get(
	'/read/:id',
	UsersValidator.checkIdParam(),
	Middleware.handleValidationError,
	UsersController.readByID
);

router.put(
	'/update',
	UsersValidator.checkIdParam(),
	Middleware.handleValidationError,
	UsersController.update
);

router.delete(
	'/delete',
	UsersValidator.checkIdParam(),
	Middleware.handleValidationError,
	UsersController.delete
);

export default router;
