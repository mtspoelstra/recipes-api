const express = require('express')
const app = express()
const PORT = 8000


// API data

const recipes = {
    "creamy pesto pasta": {
        "name": "Creamy Pesto Pasta",
        "type": "meal",
        "description": "Gluten-free pasta with dairy free cashew cheese and vegan kale pesto",
        "time": "30min",
        "ingredients": ["gluten free pasta", "Myokos cheese", "Trader Joe's pesto", "organic spinach", "salt"],
        "description": "Bring water to a boil. Follow insructions on box to cook pasta. When pasta is complete, drain water, leaving just a little. Add myokos cheese and traders joes pesto. Stir until well blended. Salt to taste.",
        "keywords": ["creamy", "savory", "hearty"]
    },
    "cucumber and crackers": {
        "name": "Cucumber and Crackers",
        "type": "snack",
        "description": "Crisp cucumbers with crunchy crackers",
        "time": "5min",
        "ingredients": ["cucumber", "salt", "Simple Mills Almond Flour Crackers",],
        "description": "Peel cucumber and cut into slices. Lightly salt to taste. Serve with crackers",
        "keywords": ["refreshing", "hydrating", "salty"]
    }
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.get('/api/:name', (req, res) => {
    const recipeName = req.params.name
    if(recipes[recipeName]){
        res.json(recipes[recipeName])
    } else{
        res.json( {message: "Recipe not found"} )
    }
    
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`server is running on port ${PORT}. You better go catch it!`)
})