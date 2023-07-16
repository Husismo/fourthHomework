export default (api) => {
    api.createProject = {
        createProject(payload) {
        return api.instance.post(`/projects`, payload)  
      },
    };
  };