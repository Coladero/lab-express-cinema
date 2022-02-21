const mongoose = require("mongoose")

const moviesSchema = new mongoose.Schema({

    title:{
     type:String
    },
    director:{
        type:String
    },
    stars:{
        type:Array
    },
    image:{
        type:String
    },
    description:{
        type:String
    },
    showtimes:{
        type:Array
    }
})

const Movies = mongoose.model("Movie", moviesSchema)  //la const en capital por que es un models.

module.exports = Movies