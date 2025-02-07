// import React, { Component } from 'react';

// class Counter extends Component {
//   // Initialize state in the constructor
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 };
//   }

//   // Method to handle button click and update state
//   incrementCount = () => {
//     // setState schedules an update to the component’s state
//     this.setState((prevState) => ({ count: prevState.count + 1 }));
//   };

//   render() {
//     return (
//       <div>
//         <h2>Class Component Counter</h2>
//         <p>Count: {this.state.count}</p>
//         <button onClick={this.incrementCount}>Increment</button>
//       </div>
//     );
//   }
// }

// export default Counter;


import React, { useState } from 'react';

const Counter = () => {
  // Declare a state variable "count" with initial value 0
  const [count, setCount] = useState(0);

  // Function to update the count state
  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <h2>Functional Component Counter</h2>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
};

export default Counter;