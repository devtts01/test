import { useDispatch } from "react-redux";
import { open, close } from "../state/reducers/dialog.reducer";
import { show, hide } from "../state/reducers/loading.reducer";

export default function useDialog() {
  const dispatch = useDispatch();
  const openDialog = (component: JSX.Element, title?: string) => {
    dispatch(open({ component, title: title || "" }));
  };
  const closeDialog = () => {
    dispatch(close());
  };

  const showLoading = () => {
    dispatch(show());
  };

  const hideLoading = () => {
    dispatch(hide());
  };

  return { openDialog, closeDialog, showLoading, hideLoading };
}
