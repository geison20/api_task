module.exports = function (app) {

  // controllers
  var authenticationUser = app.controllers.authenticationController;

  app.post("/api/authentication/user", authenticationUser.check);

  return this;
};
