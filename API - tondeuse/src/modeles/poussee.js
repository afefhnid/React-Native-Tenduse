import {Schema, model} from 'mongoose';

const pousseeSchema = new Schema(
	{
		idUser: {
			type: Schema.Types.ObjectId,
			ref: 'User',
			required: true
		},
		poids: {
			type: String,
			required: true
		},
		date: {
			type: Date,
			required: true
		}
	}
);

const Poussee = model('Poussee', pousseeSchema);

export default Poussee;