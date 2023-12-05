const mongoose=require('mongoose');
const Games=require('./models/Contact');

let games=[
    {
        name:"Dictionary",
        desc:"gives you the abstract meaning of any word you search"
    },
    {
        name:"Text Analyzer",
        desc:"Gives you a detailed description of character count, punctuation count, sentence count and much more for the given input text."
    },
    {
        name:"Text To Speech",
        desc:"Converts the given input text to speech to help the user improve their pronounciations"
    },
    {
        name:"Typing Speed Test",
        desc:"The user will have to type the given text. When done the game tells the total time taken to wrte the text."
    },
    {
        name:"Typing-Champ",
        desc:"The user has to type the given sentence in 10 seconds. It builds the pressure to increase the typing speed as much a user can."
    },
    {
        name:"White-Board",
        desc:"Hello"
    }
]

async function seedDB(){
    await Games.insertMany(games);
    console.log("Data seeded");
}

module.exports = seedDB;