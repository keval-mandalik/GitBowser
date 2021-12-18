const mongoose = require('mongoose');
  const { Schema } = mongoose;

  const RepositorySchema = new Schema({
    name:{
      type:String,
      required:true,
    },
    repoName:{
      type:String,
      required:true,
      unique:true
    },
    description:{
        type:String,
        required:true
    }
  });

  module.exports = mongoose.model("repository",RepositorySchema)