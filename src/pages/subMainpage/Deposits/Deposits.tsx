import { useEffect, useState } from "react";
import Breadscrumb from "../../../components/breadscrumb/Breadscrumb";
import ButtonWithPopup from "../../../components/buttonWithPopup/ButtonWithPopup";
import ConfirmDialog from "../../../components/dialog/confirm-dialog/ConfirmDialog";
import ShopCoinTable, {
  ICoinTableColumn,
} from "../../../components/table/shopCoinTable";
import "./Deposits.scss";
import ArrowCircleDownLeft from "../../../assets/icon/ArrowCircleDownLeft.svg";
import ArrowCircleUpRight from "../../../assets/icon/ArrowCircleUpRight.svg";
import CaretRight from "../../../assets/icon/CaretRight.svg";
import DotsThree from "../../../assets/icon/DotsThree.svg";
import useDialog from "../../../shared/hooks/useDialog";
import depositService from "../../../services/deposits.service";
import { useNavigate } from "react-router-dom";
import TextFieldShopCoin from "../../../components/textField/textFieldShopCoin";
import SearchIcon from "../../../assets/icon/MagnifyingGlass.svg";
import { currencyFormat, timeFormat } from "../../../shared/format/time-format";

export default function Deposits() {
  const { openDialog, showLoading, hideLoading } = useDialog();
  const [depositsList, setDepositList] = useState([] as any);
  const [searchData, setSearchData] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    showLoading();
    depositService.getData().then((val) => {
      setDepositList(val);
      hideLoading();
    });
  }, []);

  const gotoDetail = (id: string) => {
    navigate(`/deposits/deposit-detail/${id}`);
  };

  const tableColumnsConfig: ICoinTableColumn[] = [
    {
      title: "NO",
      dataField: "no",
    },
    {
      title: "CODE",
      dataField: "code",
    },
    {
      title: "AMOUNT",
      dataField: "amount",
      render: (dataItem) => (
        <div className="amount">
          <div className="sent">
            <div className="img-icon">
              <img src={ArrowCircleUpRight}></img>
            </div>
            <div className="content">
              <div className="title">Sent</div>
              <div className="value">
                {currencyFormat(dataItem.amount.send)}
              </div>
            </div>
          </div>
          <div className="receive">
            <div className="img-icon">
              <img src={ArrowCircleDownLeft}></img>
            </div>
            <div className="content">
              <div className="title">Received</div>
              <div className="value">
                {currencyFormat(dataItem.amount.receive)}
              </div>
            </div>
          </div>
        </div>
      ),
    },

    {
      title: "BUYER",
      dataField: "buyer",
      render: (dataItem) => (
        <div className="buyer">
          <div className="name">{dataItem.buyer.name}</div>
          <div className="email">{dataItem.buyer.email}</div>
          <div className="hover view">
            View user
          <img src={CaretRight}></img>
          </div>
        </div>
      ),
    },
    {
      title: "DATE",
      dataField: "date",
      sortable: true,
      render: (dataItem) => (
        <div>{timeFormat(dataItem.date, "DD MMM YYYY hh:mm a")}</div>
      ),
    },
    {
      title: "STATUS",
      dataField: "status",
      render: (dataItem) => (
        <div
          className={`status ${dataItem.status
            .toLowerCase()
            .replaceAll(" ", "")}`}
        >
          {dataItem.status}
        </div>
      ),
    },
    {
      title: "",
      dataField: "_",
      render: (dataItem) => (
        <ButtonWithPopup
          icon={DotsThree}
          menuItem={[
            {
              title: "View",
              action: () => {
                gotoDetail(dataItem.id);
              },
            },
            {
              title: "Delete",
              action: () => {
                openDialog(
                  <ConfirmDialog confirmMessage="Are you sure to delete this deposit?" />,
                  "Delete deposit"
                );
              },
            },
          ]}
        />
      ),
    },
  ];

  return (
    <div className="deposits-container">
      <div className="header">
        <Breadscrumb
          items={[
            { title: "Home", url: "" },
            { title: "Deposits", url: "/deposits" },
          ]}
        />
        <div className="page-title">Deposits</div>
      </div>
      <div className="content">
        <TextFieldShopCoin
          iconBefore={SearchIcon}
          placeholder="Search"
          valueStateFunction={setSearchData}
        ></TextFieldShopCoin>
        <ShopCoinTable data={depositsList} columns={tableColumnsConfig} />
      </div>
    </div>
  );
}
