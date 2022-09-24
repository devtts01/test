import React, { useState } from 'react';
import Toggle from '@atlaskit/toggle';
import "./toggleShopCoin.scss"
interface coinToggle {
  label?: string;
  isDisabled?: boolean;
  isChecked:boolean;
  callbackStateCheck?:any;
}

function ToggleShopCoin(props: coinToggle) {
    const [isChecked, setIsChecked] = useState(props.isChecked);
  return (
    <div className="shopCointToggle-container">
     <Toggle
        id="toggle-controlled"
        onChange={() =>{
          setIsChecked((prev) => !prev);
          console.log(isChecked)
          props.callbackStateCheck(!isChecked);
        } 
        }
        isChecked={isChecked}
      />
      <div className='shopCoinToggle-label'>
        {props.label}
      </div>
    </div>
  );
}

export default ToggleShopCoin;
