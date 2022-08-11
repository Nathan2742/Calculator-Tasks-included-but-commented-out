
import './App.css';
// import holiday from './images/holiday.jpg';
// import holiday2 from './images/holiday2.jpg';
// import holiday3 from './images/holiday3.jpg';
// import holiday4 from './images/holiday4.webp';
import React, { useState } from "react";
// import {evaluate} from "mathjs";



function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ['/', '*', '+', '-', '.' ]

  const updateCalc = value => {
    if(
      ops.includes(value) && calc === '' || 
      ops.includes(value) && ops.includes(calc.slice(-1)
    )) {
      return;
    }


    setCalc(calc + value);

    if ( !ops.includes(value)){
      setResult(eval(calc + value).toString());
    }
  }


const createDigits = () => {
  const digits =[];

  for (let i = 1; i <10; i++) {
    digits.push(
      <button onClick={() => updateCalc(i.toString())} key={i}>{i}</button>
    )
  }

  return digits;
}

const calculate = () => {
  setCalc(eval(calc).toString());
}

const deleteLast = () => {
  if (calc == '') {
    return;
  }

  const value =calc.slice(0, -1); 

  setCalc(value);
}


  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          { result ? <span>{result}</span> : ''} &nbsp; { calc || "0"}
        </div>

        <div className="operators">
            <button onClick={() => updateCalc('/')}>/</button>
            <button onClick={() => updateCalc('*')}>*</button>
            <button onClick={() => updateCalc('+')}>+</button>
            <button onClick={() => updateCalc('-')}>-</button>

            <button onClick={deleteLast}>DEL</button>
        </div>

        <div className="digits">
            { createDigits() }
            <button onClick={() => updateCalc('0')}>0</button>
            <button onClick={() => updateCalc('.')}>.</button>

            <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
}






export default App;








//  LEANRING REACT  TASKS ################################################


// function App() {
//   return (
//     <div className="App">
//       <h1> I'm the root component</h1>
//       <div class="task1">
//         <div>
//       <img class="img1" src={holiday} alt="Holiday pic"></img>
//       <span class="text"><ImageText name="Entire Homes" /></span></div>
//         <div>
//       <img class="img1" src={holiday2} alt="Holiday pic"></img>
//       <span class="text"><ImageText name="Unique Stays" /></span></div>
//         <div>
//       <img class="img1" src={holiday3} alt="Holiday pic"></img>
//       <span class="text"><ImageText name="Cabins and Cottages" /></span></div>
//         <div>
//       <img class="img1" src={holiday4} alt="Holiday pic"></img>
//       <span class="text"><ImageText name="Pets allowed" /></span></div>
//       </div>
//     </div>
//   );
// }

// function App() {
//   const [count, updateValue] = useState(0);

//   return (
//     <div id="counter">
//       <button class="button" onClick={() => updateValue((count - 1))}>Remove</button>
//       <h1 id="number">{count}</h1>
//       <button class="button" onClick={() => updateValue((count + 1))}>Add</button>
//     </div>
//   );
// }



// const ImageText = (props) => {
//   return (
//     <p>{props.name}</p>
//   )
// }


// //  Example #############################


//   // store value in state, first is the state value (like a variable, the second is a function to update the state value
//   const [toggle, setToggle] = useState(true);

//   // If/else statement can have multiple else ifs but replaces all content in component when each return statement runs
//   // if(toggle){
//   //   return (
//   //     <div>
//   //       <h2>If/else statement</h2>
//   //       <p>Toggle is true</p>
//   //       <button onClick={() => setToggle(!toggle)}>Toggle</button>
//   //     </div>
//   //   )
//   // } else {
//   //   return (
//   //     <div>
//   //       <h2>If/else statement</h2>
//   //       <p>Toggle is false</p>
//   //       <button onClick={() => setToggle(!toggle)}>Toggle</button>
//   //     </div>
//   //   )
//   // }

//   return (
//     <div>
//       {/* using ternary operator to class applied to h1 */}
//       <h1 className={toggle && 'funky'}>Hello World</h1>

//       {/* onClick event runs anonymous function which updates the toggle state value to the opposite of its current value */}
//       {/* using ternary operator to change text in button depending on state value */}
//       <button onClick={() => setToggle(!toggle)}>{toggle ? 'Hide content' : 'Show Content'}</button>

//       <h2>Ternary operator</h2>
//       {/* Ternary operator changes content based on condition */}
//       {toggle ? (
//         <div>
//           <h1>Hello, can you see me?</h1>
//           <p>Some cool text</p>
//         </div>
//       ) : (
//         <div>
//           <h1>Goodbye</h1>
//           <p>Some even cooler text</p>
//         </div>
//       )}

//       <h2>Short circuit evaluation</h2>
//       {/* Short circuit evaluation only displays content if condition is true, otherwise nothing is displayed */}
//       {toggle && (
//         <div>
//           <h1>Short circuit evaluation</h1>
//           <p>This only gets displayed if a condition is true</p>
//         </div>
//       )}

//     </div>
//   );
// }