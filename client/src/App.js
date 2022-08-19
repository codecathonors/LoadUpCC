// import logo from './logo.svg';
// import './App.css';
import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Form from "./Form";
import Header from "./Header";
import Bookings from "./Bookings";

function App() {
  const [bookings, setBookings] = useState([])
  // const [total, setTotal] = useState(0)

  useEffect(() => {
    fetch('/bookings')
      .then(res => res.json())
      .then(setBookings);

  }, []);

  // console.log(bookings)

  // function handleTotal(calculatedTotal) {
  //   setTotal(calculatedTotal)
  // }

  function handleNewBooking(newbook) {
    setBookings([...bookings], newbook)
  }
  

  return (
    // <div className="App">
    //   <h1>Pet Sitter App</h1>
      
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Header />
              <br></br>
            <Form handleNewBooking={handleNewBooking} bookings={bookings} />
            </Route>
            <Route path="/bookings">
              <Header />
              <Bookings bookings={bookings} key={bookings.id}/>
            </Route>
          
          </Switch>
        </div>
      </BrowserRouter>
      
  );
}

export default App;
