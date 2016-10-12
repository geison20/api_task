module.exports = function(app) {

  request = require("request");

  var auth = new Buffer("api_task" + ':' + 12345).toString('base64');

  return {

    getAllTasks : function (req, res) {
      request({
        url: process.env.API_DATABASE.concat("/api/task/getall"),
        json: true,
        method: "GET",
        headers : {
          Authorization: 'Basic ' + auth
        }
      }, function (err, response, body) {
        if (response.statusCode != 200)
          res.json(response);
        else
          res.json(body);
      });
    }
    // new methods
  };
};
