export default (api) => {
    api.getCurrentUser = {
        getCurrentUser(payload) {
        return api.instance.get(`/users/current`, payload)  
      },
    };
  };