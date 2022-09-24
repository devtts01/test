import Bell from "../../assets/icon/Bell.svg";
import Logo from "../../assets/icon/Logo.svg";
import "./Header.scss";

export default function Header() {
  return (
    <div className="header-container">
      <img className="logo" src={Logo} />
      <div className="right-content">
        <img src={Bell} />
        <div>Avatar</div>
      </div>
    </div>
  );
}
