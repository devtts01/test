import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Breadscrumb from "../../../components/breadscrumb/Breadscrumb";
import ButtonWithPopup from "../../../components/buttonWithPopup/ButtonWithPopup";
import ConfirmDialog from "../../../components/dialog/confirm-dialog/ConfirmDialog";
import ShopCoinTable, {
  ICoinTableColumn,
} from "../../../components/table/shopCoinTable";
import DotsThree from "../../../assets/icon/DotsThree.svg";
import TextFieldShopCoin from "../../../components/textField/textFieldShopCoin";
import SearchIcon from "../../../assets/icon/MagnifyingGlass.svg";
import sellService from "../../../services/sell.service";
import { currencyFormat, timeFormat } from "../../../shared/format/time-format";
import useDialog from "../../../shared/hooks/useDialog";
import "./Sell.scss";

export default function Sell() {
  const { openDialog, showLoading, hideLoading } = useDialog();
  const [searchData, setSearchData] = useState("");
  const [sellList, setSellList] = useState([] as any);
  const navigate = useNavigate();

  const tableColumnsConfig: ICoinTableColumn[] = [
    {
      title: "NO",
      dataField: "no",
    },
    {
      title: "SYMBOL",
      dataField: "symbol",
      render: (dataItem) => (
        <div>
          <img height={30} src={dataItem.symbol} />
        </div>
      ),
    },
    {
      title: "AMOUNT",
      dataField: "amount",
      render: (dataItem) => (
        <div className="amount">
          <div className="sent">
            icon
            <div className="content">
              <div className="title">Sent</div>
              <div className="value">
                {currencyFormat(dataItem.amount.send)}
              </div>
            </div>
          </div>
          <div className="receive">
            icon
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
          <div className="hover view">View user</div>
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
                  <ConfirmDialog confirmMessage="Are you sure to delete this item??" />,
                  "Delete"
                );
              },
            },
          ]}
        />
      ),
    },
  ];

  useEffect(() => {
    showLoading();
    sellService.getData().then((val) => {
      setSellList(val);
      hideLoading();
    });
  }, []);

  const gotoDetail = (id: string) => {
    navigate(`/buy/buy-detail/${id}`);
  };
  return (
    <div className="sell-container">
      <div className="header">
        <Breadscrumb
          items={[
            { title: "Home", url: "" },
            { title: "Sell", url: "/sell" },
          ]}
        />
        <div className="page-title">Sell</div>
      </div>
      <div className="content">
        <TextFieldShopCoin
          iconBefore={SearchIcon}
          placeholder="Search"
          valueStateFunction={setSearchData}
        ></TextFieldShopCoin>
        <ShopCoinTable data={sellList} columns={tableColumnsConfig} />
      </div>
    </div>
  );
}
