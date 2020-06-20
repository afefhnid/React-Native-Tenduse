import {Schema, model} from 'mongoose';

const conseilSchema = new Schema(
	{
		titre: {
			type: String,
			required: true
		},
		contenu: {
			type: String,
			required: true
		}
	}
);

const Conseil = model('Conseil', conseilSchema);

export default Conseil;