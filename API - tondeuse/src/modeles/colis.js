import { Schema, model } from "mongoose";

const colisSchema = new Schema({
  idAssociation: {
    type: Schema.Types.ObjectId,
    ref: "Association",
    required: true,
  },
  idUser: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  colisCode: {
    type: String,
    required: true,
  },
  dateEnvoie: {
    type: Date,
    required: true,
  },
  dateReception: {
    type: Date,
    required: false,
  },
});

const Colis = model("Colis", colisSchema);

export default Colis;
