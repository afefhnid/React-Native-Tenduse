import {connect} from 'mongoose';

const connexion = () => 
{
	return connect(`mongodb://localhost:27017/tondeuse`,
	{useNewUrlParser: true, useUnifiedTopology: true});
}

export default connexion;