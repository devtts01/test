import Breadscrumb from "../../../components/breadscrumb/Breadscrumb";
import { sharedService } from "../../../services/shared.service";
import userService from "../../../services/user.service";
import "./Dashboard.scss";

export default function Dashboard() {
  userService.logIn("abc", "abc");
  const a = sharedService.descrypt_by_aes(
    "NKFL5MY87HPtRhvyFwKlCg0BdU9Ji6i4zW0KfJ0xZ6eFYdhXXWeHMosMajPNK/Y9"
  );

  return (
    <div className="dashboard-container">
      <div className="header">
        <Breadscrumb
          items={[
            { title: "Home", url: "" },
            { title: "Dashboard", url: "/dashboard" },
          ]}
        />
        <div className="page-title">Dashboard</div>
      </div>
      <div className="content">Dashboard</div>
    </div>
  );
}
