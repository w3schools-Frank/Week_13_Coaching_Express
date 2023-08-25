import { useState } from "react";

function GetAllPets() {

    const [pets, setPets] = useState([]);

    const getAllPetsHandler = async () => {
        const response = await fetch("http://localhost:3001/pets", {
            method: "GET"
        });
        const result = await response.json();

        setPets(result);

        console.log(result);
    }


    return (
        <>
            <button onClick={getAllPetsHandler} type="button">Get All Pets</button>

            { pets.map((pet) => (
                <div key={pet.id}>
                    <p>Pet ID: {pet.id}, Pet Type: {pet.type}</p>
                </div>
            ))}
        </>
    )
}

export default GetAllPets;