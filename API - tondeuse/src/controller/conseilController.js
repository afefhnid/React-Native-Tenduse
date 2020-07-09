import Conseil from '../modeles/conseil';

class ConseilController
{
	static async create(request, response)
	{
		
		let status = 200;
		let body = {};
		try{
			let conseil = await Conseil.create(
			{
				'titre': request.body.titre,
				'contenu': request.body.contenu
			});
			
			body = {conseil, 'message': 'Conseil created'};
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
			let conseil = await Conseil.findOne(
			{
				_id: id
			}).populate('idUser');
			
			body = {conseil, 'message': 'conseil find'};
		}
		catch(error) {
			status = 500;
			body = {'message': error.message};
		}
		
		return response.status(status).json(body);
	}
	
	static async deleteConseil(request, response)
	{
		let status = 200;
		let body = {};
		try{
			
			let id = request.params.id;
			await Conseil.deleteOne(id);
			
			body = {'message': 'Conseil deleted'};
		}
		catch(error) {
			status = 500;
			body = {'message': error.message};
		}
		
		return response.status(status).json(body);
	}
	
	static async updateConseil(request, response)
	{
		let status = 200;
		let body = {};
		try{
			
			let id = request.params.id;
			await Conseil.upadte(
			{
				_id: request.params.id,
				'titre': request.body.titre,
				'contenu': request.body.contenu
			});
			
			body = {'message': 'Conseil updated'};
		}
		catch(error) {
			status = 500;
			body = {'message': error.message};
		}
		
		return response.status(status).json(body);
	}
}

export default ConseilController;