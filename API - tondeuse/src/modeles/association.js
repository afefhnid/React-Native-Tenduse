import {Schema, model} from 'mongoose';

const associationSchema = new Schema(
	{
		email: {
			type: String,
			required: true
		},
		nom: {
			type: String,
			required: true
		},
		adresse: {
			type: String,
			required: true
		}
	}
);

const Association = model('Association', associationSchema);

export default Association;