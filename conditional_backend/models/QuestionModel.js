const mongoose = require("mongoose");


const QusetionSchema = new mongoose.Schema({

        statement: {
            type: String,
            required: true,
          },
        opt1: {
            type: String,
            required: true,
          },
        opt2: {
            type: String,
            required: true,
          },
        opt3: {
            type: String,
            required: true,
          },
        file1: {
            type: String,
            required: true,
          },
        file2: {
            type: String,
            required: true,
        },
        file3: {
            type: String,
            required: true,
        },

});



module.exports = Questions = mongoose.model("questions", QusetionSchema);