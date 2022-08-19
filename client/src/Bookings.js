import React from "react";
import SingleBooking from "./SingleBooking";

function Bookings( { bookings, total }) {
    // console.log(bookings)
    console.log(total)

    

    return (
        <>
            <h1 className="all-bookings-title">All LoadUp Pet Sitter Bookings</h1>
            <div className="bookings-container">
                {bookings.map(booking => <SingleBooking booking={booking} key={booking.id} total={total}/>)}
            </div>
        </>
    )
}

export default Bookings;