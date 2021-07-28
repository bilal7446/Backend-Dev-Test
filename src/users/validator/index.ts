import { body, param, query } from 'express-validator';

class UsersValidator {
	checkCreateUsers() {
		return [
			body('id')
				.optional()
				.isUUID(4)
				.withMessage('The value should be UUID v4'),
			body('phoneNumber')
				.notEmpty()
				.withMessage('The phone number value should not be empty'),
			body('name')
				.notEmpty()
				.withMessage('The name should not be empty'),
			];
	}
	checkReadUsers() {
		return [
			query('limit')
				.optional()
				.isInt({ min: 1, max: 50 })
				.withMessage('The limit value should be number and between 1-10'),
			query('offset')
				.optional()
				.isNumeric()
				.withMessage('The value should be number'),
		];
	}
	checkIdParam() {
		return [
			
		];
	}
}

export default new UsersValidator();
