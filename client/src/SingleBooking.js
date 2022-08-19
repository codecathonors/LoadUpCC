import React from "react";

function SingleBooking({ booking }) {
    // console.log(booking)

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
        <div className="single-booking-container" style={{ border: '4px solid blue', borderRadius: 20, paddingLeft: 20, paddingRight: 50, paddingBottom: 10, marginBottom: 20, }}>
            <h1>Pet: {booking.animal_name} ({booking.animal_type})</h1>
            <h2>Owner: {booking.first_name} {booking.last_name}</h2>
            <h4>Date of Service: {booking.date_of_service}</h4>
            <h4>Total Amount Due:
                <div className="error">${calculateAmountDue()}.00</div></h4>
            <h4>Duration: {booking.hours_requested} hours</h4>
        </div>
    )
}

export default SingleBooking;