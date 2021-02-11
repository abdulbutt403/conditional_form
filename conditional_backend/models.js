const mongoose = require("mongoose");


const QusetionSchema = new mongoose.Schema({

    list : [
     {
        MainQuestion: {
            type: String,
            required: true,
          },
        Mainimage: {
            type: String,
            required: true,
          },
        option1: {
            type: String,
            required: true,
          },
        option2: {
            type: String,
            required: true,
          },
        option3: {
            type: String,
            required: true,
          },
        ConditionalQuestion: {
            type: String,
            required: true,
          },
     }
    ]

});



module.exports = Questions = mongoose.model("questions", CompanySchema);