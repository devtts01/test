import { useLocation, useNavigate } from "react-router-dom";
import "./LeftNav.scss";

interface ILeftNavProps {
  items: { title: string; url: string; icon?: any; iconActive?: string }[];
}
export default function LeftNav(props: ILeftNavProps) {
  const navigate = useNavigate();
  const path = useLocation().pathname;

  const changeTab = (url: string) => {
    navigate(url);
  };
  return (
    <div className="leftnav-container">
      {props.items.map((item, index) => (
        <div
          onClick={() => changeTab(item.url)}
          className={`nav-item ${item.url === path ? "active" : ""}`}
          key={"nav-" + index}
        >
          {" "}
          {!!item.icon && item.url !== path && <img src={item.icon} />}
          {!!item.icon && item.url === path && <img src={item.iconActive} />}
          {item.title}
        </div>
      ))}
    </div>
  );
}
