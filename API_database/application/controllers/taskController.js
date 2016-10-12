module.exports = function(app) {

  var Task = app.models.taskModel;

  return {

    createTask : function (req, res) {
      var resultTaskCreate = function (err, task) {
        if(err) {
          res.status(404).json({
            error : true,
            errorGeneric: "Houve um erro e a task nao pode ser cadastrada",
            errorAPI : err
          });
        }
        res.status(200).json({
          error : false,
          successGeneric: "Task criada com sucesso",
          task : task
        });
      };

      // cria a task
      Task.create({
        task : req.body.task,
        description : req.body.description
      }, resultTaskCreate);
    },

    getAllTasks : function (req, res) {
      Task.find({},  (err, tasks) => {
        if(err) {
          res.status(404).json({
            error : true,
            errorGeneric: "Houve um erro em buscas as tasks cadastradas",
            errorAPI : err
          });
        }
        res.status(200).json({
          error : false,
          successGeneric: "Todas as tasks retornadas com sucesso",
          tasks : tasks
        });
      });
    }

    // new methods
  };
};
