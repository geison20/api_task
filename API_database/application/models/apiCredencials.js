module.exports = function(app) {
    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;

    var apiCredencialsSchema = new Schema({
        token: {
            type: String,
            required: true,
            lowercase: true,
            trim: true
        },
        password: {
            type: Number,
            required: true
        }
    });


    return mongoose.model('apicredencials', apiCredencialsSchema);
};
