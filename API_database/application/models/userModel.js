module.exports = function(app) {
    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;

    var UsersSchema = new Schema({
        login: {
            type: String,
            required: true,
            lowercase: true,
            trim: true
        },
        password: {
            type: String,
            required: true,
            lowercase: true,
            trim: true
        }
    });


    return mongoose.model('users', UsersSchema);
};
