import "./checkboxShopCoin.scss";
import { Checkbox } from '@atlaskit/checkbox';
import React, { ChangeEvent, useCallback, useState } from 'react';
import path from "path";
import { isTypeNode } from "typescript";

interface checkBox {
  isDisable?: boolean;
  isChecked: boolean;
  label?: any;
  checkState?: any;
  dataInput: any[]
}
function CheckBoxShopCoin(props: checkBox) {
  
  const [onChangeResult, setOnChangeResult] = useState('true');
  let IntialDataInput = props.dataInput;
  IntialDataInput=IntialDataInput?.map(item => ({ ...item, checkState: false }))
  const [dataOnchange,setDataOnChange]= useState(IntialDataInput)
  const [isChecked, setIsChecked] = useState(false);
  const onChange = useCallback((event: ChangeEvent<HTMLInputElement>,position:any) => {
    setIsChecked((current) => !current);
    setOnChangeResult(`${event.target.checked}`);
  }, []);
  const onClickEvent=(position:number)=>{
    let updateDataChange = dataOnchange;
    updateDataChange[position].checkState=!updateDataChange[position].checkState
    setDataOnChange(updateDataChange)
    props.checkState(updateDataChange)
  }
  return (
    <div className="checkboxShopCoin-container">
      {
        IntialDataInput.map((item: any, index: number) => {
          return (
            <Checkbox
              isDisabled={props.isDisable}
              isChecked={dataOnchange[index].checkState}
              onChange={onChange}
              onClick={()=> onClickEvent(index)}
              label={item.name}
            />
          )
        })
      }

    </div>
  );
};

export default CheckBoxShopCoin;