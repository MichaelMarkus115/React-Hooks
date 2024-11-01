import React from "react";
import Products from "./Products";
import { Button } from "react-bootstrap";
import Rating from "./Rating";
import JumbotronComponent from "./JumbotronComponent";

// function formatName(user) {
//   return user.firstName + ' ' + user.lastName;
// }

function App() {
  const isValid = true;

  return (
    <div>
      {/* <Rating rating='1' />
      <Rating rating='2' />
      <Rating rating='3' />
      <Rating rating='4' />
      <Rating rating='5' /> */}

      {/* <Products /> */}

      <JumbotronComponent>
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </JumbotronComponent>
    </div>
  );
}

export default App;
