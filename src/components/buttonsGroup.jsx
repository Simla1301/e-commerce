import React from 'react';
import CartButton from './cartButton';
import ReviewBotton from './buttons/reviewBotton';

const ButtonsGroup = () => {
  return (
    <div className='d-flex gap-5 justify-content-center'>
      <CartButton/>
      <ReviewBotton/>
    </div>
  )
}

export default ButtonsGroup
