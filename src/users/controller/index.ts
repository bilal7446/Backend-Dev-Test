import { Request, Response } from 'express';

import { v4 as uuidv4 } from 'uuid';
import { UsersInstance } from '../model';

class UsersController {
	async create(req: Request, res: Response) {
		const id = uuidv4();
		try {
			const record = await UsersInstance.create({ ...req.body, id });
			return res.json({ record, msg: 'Successfully create user' });
		} catch (e) {
			return res.json({ msg: 'fail to create', status: 500, route: '/create' });
		}
	}

	async readPagination(req: Request, res: Response) {
		try {

			var limit = req.query.limit as number | undefined;
			if(limit==undefined){
				limit=5;
			}
			const offset = req.query.offset as number | undefined;

			const id = req.query.id as string | undefined;
			
			const phoneNumber = req.query.phoneNumber as string | undefined;
			
			//this is a little redundent but my little lack of nodeJs knowledge has lead me to use this for now. will apply better method later.
			let params;
			if(id!=undefined && phoneNumber!=undefined){
				params={id:id, phoneNumber:phoneNumber};
			}else if(id!=undefined){
				params={ id:id};

			}else if(phoneNumber!=undefined){
				params={ phoneNumber:phoneNumber};

			}else{
				params={};
			}
			const records = await UsersInstance.findAll({ where:params, limit, offset });
			return res.json(records);
		} catch (e) {
			return res.json({ msg: 'fail to read', status: 500, route: '/read' });
		}
	}
	async readByID(req: Request, res: Response) {
		try {
			const { id } = req.params;
			const record = await UsersInstance.findOne({ where: { id } });
			return res.json(record);
		} catch (e) {
			return res.json({ msg: 'fail to read', status: 500, route: '/read/:id' });
		}
	}
	async update(req: Request, res: Response) {
		try {
			const id = req.query.id as string | undefined;
			
			const phoneNumber = req.query.phoneNumber as string | undefined;
			
			//this is a little redundent but my little lack of nodeJs knowledge has lead me to use this for now. will apply better method later.
			let params;
			if(id!=undefined && phoneNumber!=undefined){
				params={id:id, phoneNumber:phoneNumber};
			}else if(id!=undefined){
				params={ id:id};

			}else if(phoneNumber!=undefined){
				params={ phoneNumber:phoneNumber};

			}else{
				return res.json({ msg: 'Enter id or Phone number' });
			}
			const record = await UsersInstance.findOne({ where: params });

			if (!record) {
				return res.json({ msg: 'Can not find existing record' });
			}

			const updatedRecord = await record.update({ ...req.body});
			return res.json({ record: updatedRecord });
		} catch (e) {
			return res.json({
				msg: 'fail to read',
				status: 500,
				route: '/update/:id',
			});
		}
	}
	async delete(req: Request, res: Response) {
		try {
			const id = req.query.id as string | undefined;
			
			const phoneNumber = req.query.phoneNumber as string | undefined;
			
			//this is a little redundent but my little lack of nodeJs knowledge has lead me to use this for now. will apply better method later.
			let params;
			if(id!=undefined && phoneNumber!=undefined){
				params={id:id, phoneNumber:phoneNumber};
			}else if(id!=undefined){
				params={ id:id};

			}else if(phoneNumber!=undefined){
				params={ phoneNumber:phoneNumber};

			}else{
				return res.json({ msg: 'Enter id or Phone number' });
			}
			const record = await UsersInstance.findOne({ where: params });

			if (!record) {
				return res.json({ msg: 'Can not find existing record' });
			}

			const deletedRecord = await record.destroy();
			return res.json({ record: deletedRecord });
		} catch (e) {
			return res.json({
				msg: 'fail to read',
				status: 500,
				route: '/delete/:id',
			});
		}
	}
}

export default new UsersController();
