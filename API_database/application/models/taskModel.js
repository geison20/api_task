module.exports = function(app) {

  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var TaskSchema = new Schema({
    task:  {
      type: String,
      required : true,
      lowercase : true,
      trim : true
    },
    user: {
      type: Schema.Types.ObjectId,
      ref : 'users'
    },
    description:   {
      type : String,
      lowercase : true,
      trim : true
    },
    create_at : {
      type : Date,
      default : new Date()
    }
  });


  return mongoose.model('tasks', TaskSchema);

};
