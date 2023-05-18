// import React, { useState } from "react";
// import ReactDOM from "react-dom";
// import PropTypes from "prop-types";

// const Dice = ({ onClick }) => {
//   const [number, setNumber] = useState(null);

//   const rollDice = () => {
//     const randomNumber = Math.floor(Math.random() + 1 ) * 6;
//     setNumber(randomNumber);
//   };

//   return (
//     <div className="dice" onClick={onClick}>
//       {number && <p>{number}</p>}
//     </div>
//   );
// };

// Dice.propTypes = {
//   onClick: PropTypes.func.isRequired,
// };

// const App = () => {
//   const [diceCount, setDiceCount] = useState(1);

//   const addDice = () => {
//     setDiceCount(diceCount + 1);
//   };

//   const handleDiceClick = () => {

//     console.log("Dice clicked");
//   };

//   return (
//     <div>
//       <button onClick={addDice}>Add Dice</button>
//       {Array.from({ length: diceCount }).map((_, index) => (
//         <Dice key={index} onClick={handleDiceClick} />
//       ))}
//     </div>
//   );
// };

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);


// import React, { useState } from "react";
// import ReactDOM from "react-dom";

// function Dice() {
//   const [number, setNumber] = useState(1);

//   const rollDice = () => {
//     const randomNumber = Math.floor(Math.random() * 6) + 1;
//     setNumber(randomNumber);
//   };

//   return (
//     <div onClick={rollDice} style={{ fontSize: "2rem", cursor: "pointer" }}>
//       {number}
//     </div>
//   );
// }

// function App() {
//   return (
//     <div>
//       <Dice />
//       <Dice />
//       <Dice />
//     </div>
//   );
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
