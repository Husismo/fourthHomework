export default (api) => {
    api.createTask = {
        createTask(payload) {
        return api.instance.post(`/tasks`, payload)  
      },
    };
  };