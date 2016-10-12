module.exports = function(app) {

  taskController = app.controllers.taskController;

  app.get('/getalltasks', taskController.getAllTasks);

  return this;
};
