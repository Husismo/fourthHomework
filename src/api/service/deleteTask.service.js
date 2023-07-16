export default (api) => {
    api.deleteTask = {
        deleteTask(id) {
        return api.instance.delete(`/tasks/${id}`, id)  
      },
    };
  };