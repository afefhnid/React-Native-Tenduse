import Poussee from '../modeles/poussee';

class PousseeController
{
	static async create(request, response)
	{
		
		let status = 200;
		let body = {};
		try{
			let poussee = await Poussees.create(
			{
				'idUser': request.body.idUser,
				'poids': request.body.poids,
				'date': Date()
			});
			
			body = {poussee, 'message': 'Poussee created'};
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
			let poussee = await Poussee.findOne(
			{
				_id: id
			}).populate('idUser');
			
			body = {post, 'message': 'poussee find'};
		}
		catch(error) {
			status = 500;
			body = {'message': error.message};
		}
		
		return response.status(status).json(body);
	}
	
	static async getPousseeByIdUser(request, response)
	{
		let status = 200;
		let body = {};
		try{
			
			let idUser = request.params.idUser;
			let poussee = await Poussee.findOne(
			{
				idUser: idUser
			}).populate('idUser');
			
			body = {post, 'message': 'poussees find'};
		}
		catch(error) {
			status = 500;
			body = {'message': error.message};
		}
		
		return response.status(status).json(body);
	}
	
	static async deletePoussee(request, response)
	{
		let status = 200;
		let body = {};
		try{
			
			let id = request.params.id;
			await Poussee.deleteOne(id);
			
			body = {'message': 'Poussee deleted'};
		}
		catch(error) {
			status = 500;
			body = {'message': error.message};
		}
		
		return response.status(status).json(body);
	}	
}

export default PousseeController;