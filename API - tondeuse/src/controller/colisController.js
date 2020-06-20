import Colis from '../modeles/colis';

class ColisController
{
	static async create(request, response)
	{
		
		let status = 200;
		let body = {};
		try{
			let colis = await Colis.create(
			{
				'idAssociation': request.body.idAssociation,
				'idUser': request.body.idUser,
				'dateEnvoie': Date()
			});
			
			body = {colis, 'message': 'Colis created'};
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
			let colis = await Colis.findOne(
			{
				_id: id
			}).populate('idAssociation').populate('idUser');
			
			body = {post, 'message': 'colis find'};
		}
		catch(error) {
			status = 500;
			body = {'message': error.message};
		}
		
		return response.status(status).json(body);
	}
	
	static async deleteColis(request, response)
	{
		let status = 200;
		let body = {};
		try{
			
			let id = request.params.id;
			await Colis.deleteOne(id);
			
			body = {'message': 'Colis deleted'};
		}
		catch(error) {
			status = 500;
			body = {'message': error.message};
		}
		
		return response.status(status).json(body);
	}
	
	static async updateColis(request, response)
	{
		let status = 200;
		let body = {};
		try{
			
			let id = request.params.id;
			await Colis.upadte(
			{
				_id: request.params.id,
				'idAssociation': request.body.idAssociation,
				'idUser': request.body.idUser,
				'dateEnvoie': request.body.dateEnvoie,
				'dateReception': request.body.dateReception
			});
			
			body = {'message': 'Colis updated'};
		}
		catch(error) {
			status = 500;
			body = {'message': error.message};
		}
		
		return response.status(status).json(body);
	}
}

export default ColisController;