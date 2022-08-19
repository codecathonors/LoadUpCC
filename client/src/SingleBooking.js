import React from "react";

function SingleBooking({ booking }) {
    console.log(booking)

    //  function calculateTotal() {
    //     if (animalType === "cat") {
    //         let total = (20 + (hoursRequested * 5))
    //         // handleTotal(total)
    //         alert(`Thank you for booking with LoadUp! Your total comes out to $${total}.00. We can't wait to see ${animalName}!`)
    //     } else {
    //         let total = (20 + (hoursRequested * 10))
    //         // handleTotal(total)
    //         alert(`Thank you for booking with LoadUp! Your total comes out to $${total}.00. We can't wait to see ${animalName}!`)
    // }}

    function calculateAmountDue() {
        if (booking.animal_type === "cat") {
            let total = (20 + (booking.hours_requested * 5))
            return total
        } else {
            let total = (20 + (booking.hours_requested * 10))
            return total
        } 
    }

    return (
        <div className="single-booking-container" style={{ border: '4px solid blue', borderRadius: 20, paddingLeft: 10, paddingRight: 10, paddingBottom: 10, marginBottom: 20 }}>
            <h1>Pet: {booking.animal_name} ({booking.animal_type})</h1>
            <h2>Owner: {booking.first_name} {booking.last_name}</h2>
            <h4>Date of Service: {booking.date_of_service}</h4>
            <h4>Total Amount Due: 
                <div className="error">{calculateAmountDue()}</div></h4>
            <h4>Hours of Service: {booking.hours_requested}</h4>
            
        </div>
    )
}

export default SingleBooking;