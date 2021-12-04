
const mongoose = require('mongoose');

const Ability = new mongoose.Schema({
    name:{
    type: String,
    required: true
    },
    hidden:{
        type: Boolean,
        required: true
    }});
const PokeSchema = new mongoose.Schema (
    {
    name:{
        type: String,
        required: true
    },
    hp:{
        type: Number,
        required: true
    },
    attack:{
        type: Number,
        required: true
    },
    defence:{
        type: Number,
        required: true
    },
    special_attack:{
        type: Number,
        required: true
    },
    special_defence:{
        type: Number,
        required: true
    },
    speed:{
        type: Number,
        required: true
    },
    abilites:
    {
        type: [Ability],
        required: true
    },
    types:
    {
        type1:{
        type: String,
        required: true
        },
        type2:{
        type: String,
        required: true
        }
    }
}, {timestamps: true});

const Pokemon = mongoose.model('Pokemon', PokeSchema); 
module.exports = Pokemon;