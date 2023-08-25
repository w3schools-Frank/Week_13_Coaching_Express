const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
const PORT = 3001;

const pets = [
    {
        id: 1,
        type: "dog"
    },
    {
        id: 2,
        type: "cat"
    }
];

//GET all pets
app.get("/pets", (req, res) => {
    res.status(200).json(pets);
});

//GET pet by id
app.get("/pets/:petId", (req, res) => {
    for (let pet of pets) {
        if (pet.id == req.params.petId) {
            return res.status(200).send(pet);
        }
    }

    res.status(404).send("Pet not found");    
});

//POST add new pet
app.post("/pets", (req, res) => {
    let index = pets[pets.length - 1].id + 1;
    const newPet = {
        id: index,
        type: req.body.type
    };

    pets.push(newPet);
    res.status(201).json(newPet);
});

//PUT - edit pet
app.put("/pets/:petId", (req, res) => {
    for (let pet of pets) {
        if (pet.id == req.params.petId) {
            pet.type = req.body.type;
            return res.status(200).send("Pet type was changed!")
        }
    }

    res.status(404).send("Pet not found");
});



app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});