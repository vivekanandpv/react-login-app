import React, { useState } from 'react';

const Sample = (props) => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <React.Fragment>
      <h2>
        I am {props.name}, and I am a {props.profession}
      </h2>
      <h3>Count: {count}</h3>
      <hr />
      <button className='btn btn-primary mr-3' onClick={handleIncrement}>
        Increment
      </button>
      <button className='btn btn-danger' onClick={handleDecrement}>
        Decrement
      </button>
    </React.Fragment>
  );
};

export default Sample;
