export default (api) => {
  api.Auth = {
    loginRequest(payload) {
      return api.instance.post(`/login`, payload)  
    },
  };
};