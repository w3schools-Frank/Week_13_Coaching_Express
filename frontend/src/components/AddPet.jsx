function AddPet() {

    const addPetHandler = async (e) => {
        e.preventDefault();

        //Saving our user input value for "type" into "typeValue"
        const typeValue = e.target.type.value;

        const requestInfo = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                type: typeValue
            })
        }

        const response = await fetch("http://localhost:3001/pets", requestInfo);
        const result = await response.json();

        console.log(result);
    }

    return (
        <>
        
            <h2>Add Pet Form</h2>
            <form onSubmit={(e) => {addPetHandler(e)}}>
                <label htmlFor="type">Pet Type</label>
                <input type="text" id="type" name="type" />
                <button>Submit</button>
            </form>

        </>
    )
}

export default AddPet;