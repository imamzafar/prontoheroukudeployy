// const baseUrl = "http://localhost:5000";
// const baseUrl =  "https://pronto-ecom.herokuapp.com";

const baseUrl =  "https://pronto-ecomm.herokuapp.com";

export const api = `${baseUrl}/api`;
export const generatePublicUrl = (fileName) => {
  return `${baseUrl}/public/${fileName}`;
};
