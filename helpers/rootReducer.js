const initState = {
    favoris: [],
};

const rootReducer = (state = initState, action) => {

    /*if(action.type === "UPDATE_FAVORIS"){
        return {
            ...state,
            favoris: action.favoris
        }
    } else{
        return state;
    }*/

    switch (action.type) {
        case "UPDATE_FAVORIS":
            return {
                ...state,
                favoris: action.favoris
            };

        default:
            return state;
    }
};


export default rootReducer;
