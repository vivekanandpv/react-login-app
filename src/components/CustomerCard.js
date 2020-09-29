import React from 'react';

const CustomerCard = (props) => {
  const handleHello = () => {
    props.greet(props.customer);
  };
  return (
    <React.Fragment>
      <div className='card my-2'>
        <div className='card-body'>
          <h4>
            {props.customer.firstName} {props.customer.lastName}
          </h4>
          <p className='text-primary font-weight-bold'>{props.customer.id}</p>
          <button className='btn btn-primary' onClick={handleHello}>
            Say Hello
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CustomerCard;
