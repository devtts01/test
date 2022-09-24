import Breadscrumb from "../../../components/breadscrumb/Breadscrumb";
import "./User.scss";

export default function User() {
  return (
    <div className="user-container">
      <div className="header">
        <Breadscrumb
          items={[
            { title: "Home", url: "" },
            { title: "User", url: "/user" },
          ]}
        />
        <div className="page-title">User</div>
      </div>
      <div className="content">User</div>
    </div>
  );
}
