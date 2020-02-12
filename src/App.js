import React from "react";
import "./App.css";
function formatName(user) {
  console.log(user);
  return user.firstname + " " + user.lastname;
}
const user = {
  firstname: "Suraj",
  lastname: "Singh"
};
function App() {
  const element = <h1>Hello, {formatName(user)}</h1>;
  return element;
}

export default App;
