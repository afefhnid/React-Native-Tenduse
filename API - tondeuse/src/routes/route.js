import { Router } from "express";
import UserController from "../controller/userController";
import PousseeController from "../controller/pousseeController";
import ConseilController from "../controller/conseilController";
import ColisController from "../controller/colisController";
import AssociationController from "../controller/associationController";

const router = Router();

router.get("/helloWorld", function (request, response) {
  response.send("Hello World");
});

// Routes pour les utilisateurs
router.get("/users", UserController.getAll);
router.post("/user", UserController.create);
router.get("/user/:id", UserController.details);
router.delete("/user/:id", UserController.deleteUser);
router.put("/user/link/:id", UserController.linkTondeuse);
router.put("/user/:id", UserController.updateUser);

// Routes pour les associations
router.post("/association", AssociationController.create);
router.get("/association/:id", AssociationController.details);
router.delete("/association/:id", AssociationController.deleteAssociation);
router.put("/association/:id", AssociationController.updateAssociation);

// Routes pour les colis
router.post('/colis', ColisController.create);
router.get('/colis/:id', ColisController.details);
router.delete('/colis/:id', ColisController.deleteColis);
router.put('/colis/:id', ColisController.updateColis);

// Routes pour les conseil
router.post('/conseil', ConseilController.create);
router.get('/conseil/:id', ConseilController.details);
router.delete('/conseil/:id', ConseilController.deleteConseil);
router.put('/conseil/:id', ConseilController.updateConseil);

// Routes pour les poussée (des cheveux)
router.post('/poussee', PousseeController.create);
router.get('/poussee/:id', PousseeController.details);
router.delete('/poussee/:id', PousseeController.deletePoussee);
router.get('/poussee/user/:id', PousseeController.getPousseeByIdUser);

export default router;
