import User from '../modeles/user';

class UserController
{
	static async getAll(request, response)
	{
		let status = 200;
		let body = {};
		try{
			let user = await User.find();

			body = {user, 'message': 'user find'};
		}
		catch(error) {
			status = 500;
			body = {'message': error.message};
		}

		return response.status(status).json(body);
	}

	static async create(request, response)
	{
		let status = 200;
		let body = {};
		try{
			let user = await User.create(
			{
				'email': request.body.email,
				'nom': request.body.nom,
				'prenom': request.body.prenom,
				'password': request.body.password
			});
			
			body = {user, 'message': 'User created'};
		}
		catch(error) {
			status = 500;
			body = {'message': error.message};
		}
		
		return response.status(status).json(body);
	}
	
	static async linkTondeuse(request, response)
	{
		
		let status = 200;
		let body = {};
		try{
			
			let id = request.params.id;
			await User.update(
			{
				_id: request.params.id,
				tondeuse: request.params.tondeuse
			});
			
			body = {user, 'message': 'Tondeuse set'};
		}
		catch(error) {
			status = 500;
			body = {'message': error.message};
		}
		
		return response.status(status).json(body);
	}

	static async details(request, response)
	{
		let status = 200;
		let body = {};
		try{

			let id = request.params.id;
			let user = await User.findOne(
				{
					_id: id
				});

			body = {user, 'message': 'user find'};
		}
		catch(error) {
			status = 500;
			body = {'message': error.message};
		}

		return response.status(status).json(body);
	}

	static async deleteUser(request, response)
	{
		let status = 200;
		let body = {};
		try{
			
			let id = request.params.id;
			await User.deleteOne(id);
			
			body = {'message': 'User deleted'};
		}
		catch(error) {
			status = 500;
			body = {'message': error.message};
		}
		
		return response.status(status).json(body);
	}
	
	static async updateUser(request, response)
	{
		let status = 200;
		let body = {};
		try{
			
			let id = request.params.id;
			await User.upadte(
			{
				_id: request.params.id,
				'email': request.body.email,
				'nom': request.body.nom,
				'prenom': request.body.prenom,
				'password': request.body.password
			});
			
			body = {'message': 'User updated'};
		}
		catch(error) {
			status = 500;
			body = {'message': error.message};
		}
		
		return response.status(status).json(body);
	}
	
}

export default UserController;