module.exports = function(app) {

  taskController = app.controllers.taskController;


  app.post('/api/task/create',  taskController.createTask);
  app.get('/api/task/getall', taskController.getAllTasks);


  return this;
};
