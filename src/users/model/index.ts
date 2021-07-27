import { DataTypes, Model } from 'sequelize';
import db from '../../config/database.config';

interface UsersAttributes {
	id: string;
	phoneNumber: string;
	name: string;
}

export class UsersInstance extends Model<UsersAttributes> {}

UsersInstance.init(
	{
		id: {
			type: DataTypes.UUIDV4,
			primaryKey: true,
			allowNull: false,
		},
		phoneNumber: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		sequelize: db,
		tableName: 'users',
	}
);
