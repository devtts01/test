import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import DialogShell from "./components/dialog/dialog-shell/DialogShell";
import Loading from "./components/loading/loading";
import PrivateRoute from "./components/privateRoute/privateRoute";
import LoginPage from "./pages/login/Login";
import Mainpage from "./pages/mainpage/Mainpage";

function App() {
  const isShowDialog = useSelector((state: any) => state.dialog.showDialog);
  const isShowLoading = useSelector((state: any) => state.loading.value);
  const dialogComponents = useSelector((state: any) => state.dialog.components);
  return (
    <div
      className={`app-container ${
        isShowDialog || isShowLoading > 0 ? "modal" : ""
      }`}
    >
      {isShowLoading > 0 && <Loading />}
      {isShowDialog && (
        <div className="backdrop">
          {dialogComponents.map((comp: any) => (
            <DialogShell component={comp.comp} title={comp.title} />
          ))}
        </div>
      )}
      <BrowserRouter>
        <Routes>
          <Route
            path="*"
            element={
              <PrivateRoute>
                <Mainpage />
              </PrivateRoute>
            }
          ></Route>
          <Route path="login" element={<LoginPage />}></Route>
          {/* <Route path="*" element={<Navigate to="login" />}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
