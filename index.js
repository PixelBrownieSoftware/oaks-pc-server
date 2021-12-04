const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
require("dotenv").config();

const PokemonModel = require("./models/pokemon.js");

app.use(express.json());
app.use(cors());

mongoose.connect(
    'mongodb+srv://hamza:pleasegoogleit@nodetest.hkiy6.mongodb.net/NodeTest?retryWrites=true&w=majority'
    //'mongodb://127.0.0.1:27017/'
    , {useNewUrlParser: true});

app.get("/fetch", async(req, res) => {
    PokemonModel.find({}, (err, pokemon) => {
        if(err){
            res.json(err);
        } else{
            console.log(pokemon);
            res.json(pokemon);
        }
        });
    });

app.post("/insert", async (req,res) => {
    const pokeData = req.body;
    //console.log(pokeData.name);
    
    const pokemon = new PokemonModel(
        {
            name: pokeData.name, 
            hp: pokeData.health,
            attack : pokeData.attack,
            defence : pokeData.defense,
            special_attack : pokeData.special_attack,
            special_defence : pokeData.special_defense,
            speed : pokeData.speed,
            abilites : pokeData.abilites,
            types : pokeData.types
        }
    );
    try{
        
        await pokemon.save();
        res.send("Yes");
            
    } catch(err){
        console.log(err);
    }
});

app.listen(process.env.PORT || 3001, () => {
    console.log("Connected!");
});