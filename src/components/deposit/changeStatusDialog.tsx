import useDialog from "../../shared/hooks/useDialog";
import ShopCoinButton from "../shopCoinButton/shopCoinButton";
import "./changeStatusDialog.scss";

export default function ChangeStatusDepositDialog({ id }: any) {
  const { closeDialog } = useDialog();
  return (
    <div className="edit-status-deposit-dialog-container">
      <div className="edit-status-deposit-button-field">
        <ShopCoinButton
          label="Cancel"
          buttonColor="pure"
          onClick={closeDialog}
        ></ShopCoinButton>
        <ShopCoinButton
          label="Submit"
          buttonColor="yellow"
          onClick={() => {}}
        ></ShopCoinButton>
      </div>
    </div>
  );
}
