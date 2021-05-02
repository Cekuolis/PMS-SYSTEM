import React, { useState } from 'react';
import Popup from './Popup';
import swal from 'sweetalert';
function PrjectFrom() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  return <>
      
      <button className="btn btn-outline-success my-2 my-sm-0 text-center" type="submit">Create   <i class="material-icons">create_new_folder</i></button>
    {isOpen && <Popup
      content={<>
        <b>Design your Popup</b>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscin</p>
        <button>Test button</button>
      </>}
      handleClose={togglePopup}
    />}
  </>
}

export default PrjectFrom;