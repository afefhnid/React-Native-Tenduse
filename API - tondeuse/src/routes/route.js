import {Router} from 'express';
import UserController from "../controller/userController";
import PousseeController from "../controller/pousseeController";
import ConseilController from "../controller/conseilController";
import ColisController from "../controller/colisController";
import AssociationController from "../controller/associationController";

const router = Router();

router.get("/helloWorld", function(request, response)
{
	response.send("Hello World");
});

// Routes pour les utilisateurs
router.get('/users', UserController.getAll);
router.post('/user', UserController.create);
router.get('/user/:id', UserController.details);
router.delete('/user/:id', UserController.deleteUser);
router.put('/user/link/:id', UserController.linkTondeuse);
router.put('/user/:id', UserController.updateUser);

// Routes pour les associations
router.post('/association', AssociationController.create);
router.get('/association/:id', AssociationController.details);
router.delete('/association/:id', AssociationController.deleteAssociation);
router.put('/association/:id', AssociationController.updateAssociation);

// Routes pour les colis
router.post('/association', ColisController.create);
router.get('/association/:id', ColisController.details);
router.delete('/association/:id', ColisController.deleteColis);
router.put('/association/:id', ColisController.updateColis);

// Routes pour les conseil
router.post('/association', ConseilController.create);
router.get('/association/:id', ConseilController.details);
router.delete('/association/:id', ConseilController.deleteConseil);
router.put('/association/:id', ConseilController.updateConseil);

// Routes pour les poussée (des cheveux)
router.post('/association', PousseeController.create);
router.get('/association/:id', PousseeController.details);
router.delete('/association/:id', PousseeController.deletePoussee);
router.get('/association/user/:id', PousseeController.getPousseeByIdUser);

export default router;