module.exports = function (app) {
  User = app.models.userModel;

  return {

    check : function (req, res) {
      
      res.json({ok:true});
    }
  };
};
