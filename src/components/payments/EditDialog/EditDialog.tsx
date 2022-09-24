import TextFieldShopCoin from "../../textField/textFieldShopCoin";
import ShopCoinButton from "../../shopCoinButton/shopCoinButton";
import "./EditDialog.scss";
import { useState } from "react";
import useDialog from "../../../shared/hooks/useDialog";

interface DataPayment {
  dataPaymentState?: any;
  dataInput:any[];
  dataEdit?:any;
  cancelEvent?:any;
  createEvent?:any;
}

 

export default function PaymentEditDialog(props:DataPayment) {
  const [accountName,setAccountName]=useState(() => {
    if (!props.dataEdit) return '' 
    else 
    return props.dataEdit.accountName});
  const [bankName,setBankname]=useState(() => {
    if (!props.dataEdit) return '' 
    else 
    return props.dataEdit.bankName});
  const [accountNumber,setAccountnumber]=useState(() => {
    if (!props.dataEdit) return '' 
    else 
    return props.dataEdit.accountNumber});
  const [transaction,setTransaction]=useState(() => {
    if (!props.dataEdit) return '' 
    else 
    return props.dataEdit.transition}); 
  let idNo=0;
  if (!props.dataEdit) idNo= props.dataInput.length+1 
  else idNo=props.dataEdit.no
  const { closeDialog } = useDialog();
  let intialState = {
    no: idNo,
    accountName:accountName,
    bankName:bankName,
    accountNumber:accountNumber,
    transition:transaction
  }

  const onclick = () => {
    // props.dataInput.push(intialState);
    // props.dataPaymentState(props.dataInput);
    if (!props.dataEdit) 
    {props.dataInput.push(intialState);
    props.dataPaymentState(props.dataInput);
  }
    else {
      let tempdata=props.dataInput
      tempdata=tempdata.map(item => {
          return item.id===props.dataEdit.id? intialState : item 
      })
      props.dataPaymentState(tempdata);
      console.log(props.dataEdit.no)
    }
    closeDialog();
}
  return (
    <div className="payment-edit-dialog-container">
        <div className="edit-payment-textfield">
          <TextFieldShopCoin title="Account Name" placeholder="Enter account name" valueStateFunction={setAccountName} valueEdit={accountName}></TextFieldShopCoin>
          <TextFieldShopCoin title="Bank Name" placeholder="Enter bank name" valueStateFunction={setBankname} valueEdit={bankName}></TextFieldShopCoin>
          <TextFieldShopCoin title="Account number" placeholder="Enter account number" valueStateFunction={setAccountnumber} valueEdit={accountNumber}></TextFieldShopCoin>
          <TextFieldShopCoin title="Transaction to VND" placeholder="Enter transaction to VND" valueStateFunction={setTransaction} valueEdit={transaction}></TextFieldShopCoin>
        </div>
        <div className="edit-payment-button-field">
            <ShopCoinButton label="Cancel" buttonColor="pure" onClick={closeDialog}></ShopCoinButton>
            <ShopCoinButton label="Create" buttonColor="yellow" onClick={onclick}></ShopCoinButton>
        </div>
    </div>
  );
}
