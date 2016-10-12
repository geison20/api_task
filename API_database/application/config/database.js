module.exports = function(app) {

    var mongoose = require("mongoose");
    mongoose
        .connect('mongodb://'.concat(process.env.DB_HOST, "/", process.env.DB));

    return this;
};
