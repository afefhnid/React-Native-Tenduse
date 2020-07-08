export const getColis = (colis) => {
  console.log(colis);
  return {
    type: "SEND-COLIS",
    colis: colis,
  };
};
