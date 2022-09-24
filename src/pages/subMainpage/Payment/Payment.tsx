import Breadscrumb from "../../../components/breadscrumb/Breadscrumb";
import ShopCoinButton from "../../../components/shopCoinButton/shopCoinButton";
import ShopCoinTable, {
  ICoinTableColumn,
} from "../../../components/table/shopCoinTable";
import "./Payment.scss";
import Plus from "../../../assets/icon/Plus.svg";
import useDialog from "../../../shared/hooks/useDialog";
import PaymentEditDialog from "../../../components/payments/EditDialog/EditDialog";
import SearchIcon from "../../../assets/icon/MagnifyingGlass.svg";
import IconDelete from "../../../assets/icon/Trash.svg";
import IconEdit from "../../../assets/icon/PencilSimple.svg";
import DotsThree from "../../../assets/icon/DotsThree.svg";
import ButtonWithPopup from "../../../components/buttonWithPopup/ButtonWithPopup";
import ConfirmDialog from "../../../components/dialog/confirm-dialog/ConfirmDialog";
import TextFieldShopCoin from "../../../components/textField/textFieldShopCoin";
import { useEffect, useState } from "react";
import paymentService from "../../../services/payment.service";

export default function Payment() {
  const { openDialog, showLoading, hideLoading,closeDialog } = useDialog();
  const [searchData, setSearchData] = useState("");

  const [dataPaymentTable, setDataPaymentTable] = useState([] as any);
  // const [paymentData, setPaymentData] = useState(dataPaymentTable);
  useEffect(() => {
    showLoading();
    paymentService.getData().then((val) => {
      setDataPaymentTable(val);
      hideLoading();
    });
  }, []);

  
  const tableColumnsConfig: ICoinTableColumn[] = [
    {
      title: "NO",
      dataField: "no",
    },
    {
      title: "ACCOUNT NAME",
      dataField: "accountName",
    },
    {
      title: "BANK NAME",
      dataField: "bankName",
      sortable: true,
    },
    {
      title: "ACCOUNT NUMBER",
      dataField: "accountNumber",
    },
    {
      title: "TRANSITION",
      dataField: "transition",
    },
    {
      title: "",
      dataField: "_",
      render: (dataItem) => (
        <ButtonWithPopup
          icon={DotsThree}
          menuItem={[
            { title: "Edit",iconPre:IconEdit, action: () => {
              openDialog(
                <PaymentEditDialog
                  dataInput={dataPaymentTable}
                  dataPaymentState={setDataPaymentTable}
                  dataEdit={dataItem}
                />,
                "New payment"
              )
            } },
            {
              title: "Delete",
              iconPre:IconDelete,
              action: () => {
                const actionifYesFunction = ()=>{
                  let tempData=dataPaymentTable
                  console.log(dataItem)
                  tempData=tempData.filter((item:any) => item.no !==dataItem.no)
                  setDataPaymentTable(tempData)
                  closeDialog()
                }
                openDialog(
                  <ConfirmDialog
                    confirmMessage="Are you sure to delete this payment?"
                    confirmButtonLabel="Delete"
                    actionifYes={actionifYesFunction}
                  />,
                  "Delete payment"
                );
              },
            },
          ]}
        />
      ),
    },
  ];

  useEffect(() => {
    showLoading();
    paymentService.getData().then((val) => {
      setDataPaymentTable(val);
      hideLoading();
    });
  }, []);
  return (
    <div className="payment-container">
      <div className="header">
        <Breadscrumb
          items={[
            { title: "Home", url: "" },
            { title: "Payment", url: "/payment" },
          ]}
        />
        <div className="page-title">Payment</div>
      </div>
      <div className="content">
        <div className="tool-zone">
          <TextFieldShopCoin
            iconBefore={SearchIcon}
            placeholder="Search"
            valueStateFunction={setSearchData}
          ></TextFieldShopCoin>
        
          <ShopCoinButton
            iconBefore={Plus}
            label="New Payment"
            onClick={() =>
              openDialog(
                <PaymentEditDialog
                  dataInput={dataPaymentTable}
                  dataPaymentState={setDataPaymentTable}
                />,
                "New payment"
              )
            }
            buttonColor={"yellow"}
          />
        </div>
        <ShopCoinTable data={dataPaymentTable} columns={tableColumnsConfig} />
      </div>
    </div>
  );
}
