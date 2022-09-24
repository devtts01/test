import { Route, Routes } from "react-router-dom";
import Header from "../../components/header/Header";
import LeftNav from "../../components/leftNav/LeftNav";
import useDialog from "../../shared/hooks/useDialog";
import Dashboard from "../subMainpage/Dashboard/Dashboard";
import Payment from "../subMainpage/Payment/Payment";
import SettingCoin from "../subMainpage/SettingCoin/SettingCoin";
import Deposits from "../subMainpage/Deposits/Deposits";
import { LeftMenuConfig } from "./left-menu-config";
import "./Mainpage.scss";
import Withdraw from "../subMainpage/Withdraws/Withdraw";
import Buy from "../subMainpage/Buy/Buy";
import Sell from "../subMainpage/Sell/Sell";
import User from "../subMainpage/User/User";
import AddNewCoin from "../addNewCoin/AddNewCoin";
import DepositDetail from "../depositDetail/depositDetail";
import WithdrawDetail from "../withdrawDetail/withdrawDetail";

export default function Mainpage() {
  const { openDialog } = useDialog();
  return (
    <div className="mainpage">
      <Header />
      <div className="main-content">
        <LeftNav items={LeftMenuConfig} />
        <div className="right-content">
          <Routes>
            <Route index element={<Dashboard />} />
            <Route path="payment" element={<Payment />} />
            <Route path="setting-coin">
              <Route index element={<SettingCoin />} />
              <Route path="add-new-coin" element={<AddNewCoin />} />
              <Route path=":id" element={<AddNewCoin />} />
            </Route>
            <Route path="deposits">
              <Route index element={<Deposits />} />
              <Route
                path="deposit-detail/:id"
                element={<DepositDetail />}
              ></Route>
            </Route>
            <Route path="withdraw">
              <Route index element={<Withdraw />} />
              <Route
                path="withdraw-detail/:id"
                element={<WithdrawDetail />}
              ></Route>
            </Route>
            <Route path="buy">
              <Route index element={<Buy />} />
              <Route path="buy-detail/:id" element={<Buy />}></Route>
            </Route>
            <Route path="sell">
              <Route index element={<Sell />} />
              <Route path="sell-detail/:id" element={<Sell />}></Route>
            </Route>
            <Route path="user" element={<User />} />
            <Route path="*" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
