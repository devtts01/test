import "./Breadscrumb.scss";
import House from "../../assets/icon/House.svg";
import { useNavigate } from "react-router-dom";
interface IBreadscrumbProps {
  items: { title: string; url: string }[];
}

export default function Breadscrumb(props: IBreadscrumbProps) {
  const navigate = useNavigate();
  return (
    <div className="breadscrumb-container">
      {props.items.map((item, index) => (
        <div key={"breadscrumb-" + index} className={`flex item`}>
          {index !== 0 && <div className="mr-10"> {">"} </div>}
          {item.title === "Home" && (
            <div className="home" onClick={() => navigate("/dashboard")}>
              <img src={House} />
              <div>Home</div>
            </div>
          )}
          {item.title !== "Home" && (
            <div onClick={() => navigate(item.url)}>{item.title}</div>
          )}
        </div>
      ))}
    </div>
  );
}
