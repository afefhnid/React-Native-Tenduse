import {Schema, model} from 'mongoose';

const userSchema = new Schema(
	{
		email: {
			type: String,
			required: true
		},
		nom: {
			type: String,
			required: true
		},
		prenom: {
			type: String,
			required: true
		},
		password: {
			type: String,
			required: true
		},
		tondeuse: {
			type: String,
			required: false
		}
	}
);

const User = model('User', userSchema);

export default User;