import { useState } from "react";

function Form({ handleNewBooking, bookings, handleTotal }) {
   const [firstName, setFirstName] = useState("");
   const [lastName, setLastName] = useState("");
   const [animalName, setAnimalName] = useState("");
   const [animalType, setAnimalType] = useState("");
   const [hoursRequested, setHoursRequested] = useState(0);
   const [dateOfService, setDateOfService] = useState("");
   const [bookingError, setBookingError] = useState("");
//    const [sitterTotal, setTotal] = useState(0)

   function handlePetType(e) {
        setAnimalType(e.target.value)
   }

   function handleHoursRequested(e) {
        setHoursRequested(e.target.value)
   }

    const handleSubmit = (e) => {
        e.preventDefault()

        fetch('/bookings', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                first_name: firstName,
                last_name: lastName,
                animal_name: animalName,
                animal_type: animalType,
                hours_requested: hoursRequested,
                date_of_service: dateOfService
            })
        })
            .then(res => {
                console.log(res.status)
                if (res.status === 201) {
                    res.json().then((json) => {
                        handleNewBooking(json)
                        calculateTotal()
                    })
                    // console.log(bookings)
                } else if (res.status === 422) {
                    res.json().then((json) => {
                        console.log(json.exception);
                        setBookingError(json.exception);
                    })
                }
            })

        

        setFirstName(firstName)
        setLastName(lastName)
        setAnimalName(animalName)
        setAnimalType(animalType)
        setHoursRequested(4)
        setDateOfService(dateOfService)
    }


    // having trouble with "assignment to constant variable"

    // function calculateTotal() {
    //     if (animalType === "cat") {
    //         setTotal(total += (hoursRequested * 5))
    //         console.log("cat", total)
    //     } else {
    //         setTotal(total += (hoursRequested * 10))
    //         console.log("dog", total)
    //     } 
    // }

    function calculateTotal() {
        if (animalType === "cat") {
            let total = (20 + (hoursRequested * 5))
            // handleTotal(total)
            alert(`Thank you for booking with LoadUp! Your total comes out to $${total}.00. We can't wait to see ${animalName}!`)
        } else {
            let total = (20 + (hoursRequested * 10))
            // handleTotal(total)
            alert(`Thank you for booking with LoadUp! Your total comes out to $${total}.00. We can't wait to see ${animalName}!`)
    }}

    return (
        <div className="form-app" style={{ border: '4px solid blue', borderRadius: 20, paddingLeft: 30, paddingRight: 30, paddingBottom: 30 }}>
            <form className="form-container" onSubmit={handleSubmit}>
                <h2 className="form-header">Make a Booking</h2>
                <label>First Name:
                    <input onChange={e => setFirstName(e.target.value)}></input>
                </label>
                <br></br>
                <br></br>
                <label>Last Name:
                    <input onChange={e => setLastName(e.target.value)}></input>
                </label>
                <br></br>
                <br></br>
                <label>Pet's Name:
                    <input onChange={e => setAnimalName(e.target.value)}></input>
                </label>
                <br></br>
                <br></br>
                <label>Pet Type:
                    <select value={animalType} onChange={handlePetType} >
                        <option value=""></option>
                        <option value="cat">Cat</option>
                        <option value="dog">Dog</option>
                    </select>
                </label>
              
                
                <label>Hours Requested:
                    <select value={hoursRequested} onChange={handleHoursRequested}>
                        <option value=""></option>
                        <option value="2">2 hours</option>
                        <option value="3">3 hours</option>
                        <option value="4">4 hours</option>
                        <option value="5">5 hours</option>
                        <option value="6">6 hours</option>
                        <option value="7">7 hours</option>
                        <option value="8">8 hours</option>
                    </select>
                </label>
                <br></br>
                <br></br>
                <label>Date of Service:
                    <input onChange={e => setDateOfService(e.target.value)} placeholder="YYYY-MM-DD"></input>
                </label>
                <br></br>
                <br></br>
                
                <button className="normal">Book it!</button>
                {bookingError && <div className="error"><b>{bookingError}</b></div>}
                
            </form>


        </div>
    );
}

export default Form;