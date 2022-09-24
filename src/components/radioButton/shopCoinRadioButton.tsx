import React, { Fragment, SyntheticEvent, useCallback, useState } from 'react';

import { Checkbox } from '@atlaskit/checkbox';

import { RadioGroup } from '@atlaskit/radio';
import { OptionPropType, OptionsPropType } from '@atlaskit/radio/types';



interface dataInputRadio {
    arrayInput:any[];
    setArrayInputState?:any;
}

function RadioButton(props:dataInputRadio) {
  const [isDisabled, setIsDisabled] = useState<boolean>();
  const options: OptionsPropType = props.arrayInput.map((item:any) =>{
    return ({name:item.name,label:item.label,value:item.value,isChecked:true})
  })
  const onChange = useCallback((event: SyntheticEvent<HTMLInputElement>) => {
    props.setArrayInputState(event.currentTarget.value)
    console.log(event.currentTarget.value)
  }, []);


  return (
      <div className='radio-group-container'>
      <RadioGroup
        isDisabled={isDisabled}
        options={options}
        onChange={onChange}
        aria-labelledby="radiogroup-label"
      />
    </div>
  );
}
export default RadioButton