const express = require("express");
const router = express.Router(); 
const Question = require('../../models/QuestionModel')

router.post( "/", async (req, res) => {


    
    const arr = req.body;
    console.log(arr)

        
    try {



      arr.forEach( async (question) => {
            
        quesToAdd = new Question(question);
        await quesToAdd.save();
        
      });  

      res.status(200).send("Quiz Added Successfully")
     
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error while creating Quiz ");
    }
   }
);



router.get("/", async (req, res) => {
  try {
    let quizzez = await Question.find();
    res.json(quizzez);
  } catch (error) {
    console.error(err.message);
    res.status(500).send("Server Error when fetching company list");
  }
});

module.exports = router;