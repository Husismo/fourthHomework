export default (api) => {
    api.deleteProject = {
        deleteProject(id) {
        return api.instance.delete(`/projects/${id}`, id)  
      },
    };
  };