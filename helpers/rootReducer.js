const initState = {
  colis: [],
};
console.log("state", initState);
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
    case "SEND-COLIS":
      return {
        ...state,
        colis: action.colis,
      };

    default:
      return state;
  }
};

export default rootReducer;
