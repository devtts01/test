import useDialog from "../../../shared/hooks/useDialog";
import "./DialogShell.scss";
import Close from "../../../assets/icon/Close.svg";
interface IDialogShell {
  component: JSX.Element;
  closeIcon?: boolean;
  title?: string;
}

export default function DialogShell(props: IDialogShell) {
  const { closeDialog } = useDialog();
  return (
    <div className="dialog-shell-container">
      <div className="dialog-shell-wrapper">
        <div className="dialog-title">
          {props.title}{" "}
          {!props.closeIcon && (
            <div className="close-icon" onClick={closeDialog}>
              <img src={Close} />
            </div>
          )}
        </div>

        <div className="dialog-content">{props.component}</div>
      </div>
    </div>
  );
}
