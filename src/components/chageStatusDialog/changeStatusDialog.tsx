import useDialog from "../../shared/hooks/useDialog";
import ShopCoinButton from "../shopCoinButton/shopCoinButton";
import RadioButton from "../radioButton/shopCoinRadioButton";
import "./changeStatusDialog.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import depositService from "../../services/deposits.service";

interface dataStatus {
  name:string,
  checkState:boolean
}

export default function ChangeStatusDialog({ id }: any) {
  const { closeDialog } = useDialog();
  const [currentData, setCurrentData] = useState({} as any);

  useEffect(() => {
    depositService.getDepositById(id).then((val) => {
      setCurrentData(val);
    });
  }, []);
  let array = [
    {
      name:'On-hold',
      value:'On-hold',
      label:'On-hold'
    },
    {
      name:'Confirm',
      value:'Confirm',
      label:'Confirm'
    },
    {
      name:'Complete',
      value:'Complete',
      label:'Complete'
    },
    {
      name:'Cancel',
      value:'Cancel',
      label:'Cancel'
    }
  ]
  const [statusArray,setStatusArray]=useState(currentData.status)
  return (
    <div className="edit-status-dialog-container">
      <RadioButton arrayInput={array} setArrayInputState={setStatusArray}></RadioButton>
      <div className="edit-status-button-field">
        <ShopCoinButton
          label="Cancel"
          buttonColor="pure"
          onClick={() =>{
            setStatusArray(currentData.status);
            console.log(statusArray)
            closeDialog()}}
        ></ShopCoinButton>
        <ShopCoinButton
          label="Submit"
          buttonColor="yellow"
          onClick={() => {
            console.log(statusArray)
            closeDialog()
          }}
        ></ShopCoinButton>
      </div>
    </div>
  );
}
