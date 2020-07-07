import Association from "../modeles/association";

class AssociationController {
  static async create(request, response) {
    let status = 200;
    let body = {};
    try {
      let association = await Association.create({
        email: request.body.email,
        nom: request.body.nom,
        adresse: request.body.adresse,
      });
      console.log("on");
      console.log(association);
      body = { association, message: "Association created" };
    } catch (error) {
      status = 500;
      body = { message: error.message };
    }

    return response.status(status).json(body);
  }

  static async details(request, response) {
    let status = 200;
    let body = {};
    try {
      let id = request.params.id;
      let association = await Association.findOne({
        _id: id,
      });

      body = { post, message: "association find" };
    } catch (error) {
      status = 500;
      body = { message: error.message };
    }

    return response.status(status).json(body);
  }

  static async deleteAssociation(request, response) {
    let status = 200;
    let body = {};
    try {
      let id = request.params.id;
      await Association.deleteOne(id);

      body = { message: "Association deleted" };
    } catch (error) {
      status = 500;
      body = { message: error.message };
    }

    return response.status(status).json(body);
  }

  static async updateAssociation(request, response) {
    let status = 200;
    let body = {};
    try {
      let id = request.params.id;
      await Association.upadte({
        _id: request.params.id,
        email: request.body.email,
        nom: request.body.nom,
        adresse: request.body.adresse,
      });

      body = { message: "Association updated" };
    } catch (error) {
      status = 500;
      body = { message: error.message };
    }

    return response.status(status).json(body);
  }
}

export default AssociationController;
