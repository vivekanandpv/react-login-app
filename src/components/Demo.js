import React from 'react';

const Demo = (props) => {
  const handleClick = () => {
    console.log('Click');
    props.handler('I pass a string');
  };
  return (
    <React.Fragment>
      <button className='btn btn-primary' onClick={handleClick}>
        Click Me
      </button>
    </React.Fragment>
  );
};

export default Demo;
