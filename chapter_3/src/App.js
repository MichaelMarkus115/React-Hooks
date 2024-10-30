import React from "react";
import Products from "./Products";
import { Button } from 'react-bootstrap';
import Rating from "./Rating";

// function formatName(user) {
//   return user.firstName + ' ' + user.lastName;
// }

function App() {
  const isValid = true;

  return (
    <div>
      <Products />
      <Rating rating='1' />
      <Rating rating='2' />
      <Rating rating='3' />
      <Rating rating='4' />
      <Rating rating='5' />
      <Button variant="danger" disabled={!isValid}>Default</Button>
    </div>
  );
}

export default App;
