import ShopCoinButton from "../../shopCoinButton/shopCoinButton";
import "./ConfirmDialog.scss";
import useDialog from "../../../shared/hooks/useDialog";
interface IConfirmDilogProps {
  confirmMessage: string;
  confirmButtonLabel?: string;
  actionifYes?:any;
}

export default function ConfirmDialog(props: IConfirmDilogProps) {
  const { closeDialog } = useDialog();
  return (
    <div className="confirm-dialog-container">
      <div className="message">{props.confirmMessage}</div>
      <div className="button-group">
        <ShopCoinButton label="Cancel" buttonColor="pure" onClick={closeDialog}/>
        <ShopCoinButton
          label={props.confirmButtonLabel || "OK"}
          buttonColor="red"
          onClick={props.actionifYes}
        />
      </div>
    </div>
  );
}
