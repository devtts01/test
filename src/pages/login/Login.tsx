import moment from "moment";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/icon/Logo.svg";
import BG from "../../assets/images/login-bg.svg";
import ShopCoinButton from "../../components/shopCoinButton/shopCoinButton";
import TextFieldShopCoin from "../../components/textField/textFieldShopCoin";
import useUserData from "../../shared/hooks/useUserData";
import { login } from "../../shared/state/asyncThunk/user.async";
import { updateCurrentUser } from "../../shared/state/reducers/user.reducer";
import "./Login.scss";

export default function LoginPage() {
  const [resetPass, setResetPass] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [userNameMess, setUserNameMess] = useState("");
  const [passwordMess, setPasswordMess] = useState("");
  const [passwordConfirmMess, setPasswordConfirmMess] = useState("");
  const { userData } = useUserData();
  const navigate = useNavigate();
  const dispatch = useDispatch<any>();

  const handlLogin = () => {
    if (userName.length <= 0) setUserNameMess("Required");
    if (password.length <= 0) setPasswordMess("Required");
    dispatch(
      login({
        userName: userName,
        password: password,
        newpass: passwordConfirm,
      })
    );
  };
  const handlReset = () => {
    if (passwordConfirm.length <= 0) setPasswordConfirmMess("Required");
    if (password.length <= 0) setPasswordMess("Required");
    if (
      passwordConfirm.length > 0 &&
      password.length > 0 &&
      passwordConfirm === password
    )
      setResetPass(false);
  };

  useEffect(() => {
    if (!!userData) {
      navigate("/");
    }
  }, [userData]);

  useEffect(() => {
    const oldData =
      localStorage.getItem("loginData") !== null
        ? JSON.parse(localStorage.getItem("loginData") as string)
        : "";
    if (moment().utc().diff(oldData.date, "day") < 1) {
      dispatch(updateCurrentUser(oldData));
    }
  }, []);

  return (
    <div className="login-page-container">
      <img alt="" src={BG} className="bg" />

      {!resetPass && (
        <div className="form">
          <img alt="" src={Logo} />
          <p className="title">Log in your account</p>

          <TextFieldShopCoin
            title="Email"
            placeholder="Enter your email"
            valueStateFunction={setUserName}
            message={userNameMess}
          />
          <TextFieldShopCoin
            type="password"
            title="Password"
            placeholder="Enter your password"
            valueStateFunction={setPassword}
            message={passwordMess}
          />

          <div className="login">
            <p
              className="forgot-pass"
              onClick={() => {
                if (userName.length <= 0) setUserNameMess("Required");
                else setResetPass(true);
              }}
            >
              Forgot your password?
            </p>
            <ShopCoinButton label="Log in" onClick={handlLogin} />
          </div>
        </div>
      )}

      {resetPass && (
        <div className="form">
          <img alt="" src={Logo} />
          <p className="title">Reset account password</p>

          <TextFieldShopCoin
            title="New password"
            placeholder="Enter your password"
            valueStateFunction={setPassword}
            message={passwordMess}
            type="password"
          />
          <TextFieldShopCoin
            title="Confirm password"
            type="password"
            placeholder="Enter your password"
            valueStateFunction={setPasswordConfirm}
            message={passwordConfirmMess}
          />

          <ShopCoinButton label="Reset password" onClick={handlReset} />
        </div>
      )}
    </div>
  );
}
