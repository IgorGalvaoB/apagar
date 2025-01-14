const { Schema, model } = require('mongoose');
const wordSchema = new Schema({

    word: {

        type: String,
        maxLength: 5,
        minLength: 5,
        lowercase: true,
        trim: true,

    }
},
)


/*wordSchema.statics.randomWord = async ()=>{*/

module.exports = model('Words5', wordSchema)
