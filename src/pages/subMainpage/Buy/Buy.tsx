import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Breadscrumb from "../../../components/breadscrumb/Breadscrumb";
import ButtonWithPopup from "../../../components/buttonWithPopup/ButtonWithPopup";
import ConfirmDialog from "../../../components/dialog/confirm-dialog/ConfirmDialog";
import ShopCoinTable, {
  ICoinTableColumn,
} from "../../../components/table/shopCoinTable";
import buyService from "../../../services/buy.service";
import { currencyFormat, timeFormat } from "../../../shared/format/time-format";
import useDialog from "../../../shared/hooks/useDialog";
import "./Buy.scss";
import DotsThree from "../../../assets/icon/DotsThree.svg";
import TextFieldShopCoin from "../../../components/textField/textFieldShopCoin";
import SearchIcon from "../../../assets/icon/MagnifyingGlass.svg";

export default function Buy() {
  const { openDialog, showLoading, hideLoading } = useDialog();
  const [searchData, setSearchData] = useState("");
  const [buyList, setBuyList] = useState([] as any);
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
    buyService.getData().then((val) => {
      setBuyList(val);
      hideLoading();
    });
  }, []);

  const gotoDetail = (id: string) => {
    navigate(`/buy/buy-detail/${id}`);
  };
  return (
    <div className="buy-container">
      <div className="header">
        <Breadscrumb
          items={[
            { title: "Home", url: "" },
            { title: "Buy", url: "/buy" },
          ]}
        />
        <div className="page-title">Buy</div>
      </div>
      <div className="content">
        <TextFieldShopCoin
          iconBefore={SearchIcon}
          placeholder="Search"
          valueStateFunction={setSearchData}
        ></TextFieldShopCoin>
        <ShopCoinTable data={buyList} columns={tableColumnsConfig} />
      </div>
    </div>
  );
}
