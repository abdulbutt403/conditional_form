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
        inc1: {
          type: Number,
        },
        inc2: {
            type: Number,
        },
        inc3: {
            type: Number,
        },

});



module.exports = Questions = mongoose.model("questions", QusetionSchema);