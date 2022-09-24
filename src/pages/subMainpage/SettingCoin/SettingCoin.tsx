import Breadscrumb from "../../../components/breadscrumb/Breadscrumb";
import ButtonWithPopup from "../../../components/buttonWithPopup/ButtonWithPopup";
import DotsThree from "../../../assets/icon/DotsThree.svg";
import ShopCoinTable, {
  ICoinTableColumn,
} from "../../../components/table/shopCoinTable";
import "./SettingCoin.scss";
import Plus from "../../../assets/icon/Plus.svg";
import IconDelete from "../../../assets/icon/Trash.svg";
import IconEdit from "../../../assets/icon/PencilSimple.svg";
import SearchIcon from "../../../assets/icon/MagnifyingGlass.svg";
import { useNavigate } from "react-router-dom";
import ShopCoinButton from "../../../components/shopCoinButton/shopCoinButton";
import ConfirmDialog from "../../../components/dialog/confirm-dialog/ConfirmDialog";
import useDialog from "../../../shared/hooks/useDialog";
import { useState } from "react";
import TextFieldShopCoin from "../../../components/textField/textFieldShopCoin";

export default function SettingCoin() {
  const navigate = useNavigate();
  const { openDialog, closeDialog } = useDialog();
  const [searchData, setSearchData] = useState("" as any);
  const dummyData = Array.from({ length: 100 }, (_, i) => ({
    id: "id_" + i,
    no: i as any,
    logo: "none",
    coinName: "test_" + i + "_2022",
    createAt: "11/2019",
  }));
  const [dataTable, setDataTable] = useState(dummyData);
  const searchEvent = () => {
    let searchDataTable = dataTable;
    if (searchData === "") setDataTable(dummyData);
    else {
      searchDataTable = searchDataTable.filter(
        (item: any) =>
          item.no === (searchData as number) ||
          item.logo.includes(searchData) ||
          item.coinName.includes(searchData)
      );
      setDataTable(searchDataTable);
    }
  };
  const tableColumnsConfig: ICoinTableColumn[] = [
    {
      title: "NO",
      dataField: "no",
    },
    {
      title: "LOGO",
      dataField: "logo",
    },
    {
      title: "COIN NAME",
      dataField: "coinName",
      sortable: true,
    },
    {
      title: "CREATE AT",
      dataField: "createAt",
    },
    {
      title: "",
      dataField: "_",
      render: (dataItem) => (
        <ButtonWithPopup
          icon={DotsThree}
          menuItem={[
            {
              title: "Edit",
              iconPre: IconEdit,
              action: () => {
                navigate(`/setting-coin/${dataItem.id}`, {
                  state: {
                    dataItem,
                    dataTable,
                  },
                });
              },
            },
            {
              title: "Delete",
              iconPre: IconDelete,
              action: () => {
                const deleteFunction = () => {
                  let tempData = dataTable;
                  tempData = tempData.filter((item) => item.no !== dataItem.no);
                  setDataTable(tempData);
                  closeDialog();
                };
                openDialog(
                  <ConfirmDialog
                    confirmMessage="Are you sure to delete this coin?"
                    actionifYes={deleteFunction}
                  />,
                  "Delete coin"
                );
              },
            },
          ]}
        />
      ),
    },
  ];
  return (
    <div className="settingCoin-container">
      <div className="header">
        <Breadscrumb
          items={[
            { title: "Home", url: "" },
            { title: "Setting Coin", url: "/setting-coin" },
          ]}
        />
        <div className="page-title">Setting Coin</div>
      </div>
      <div className="content">
        <div className="tool-zone">
          <TextFieldShopCoin
            iconBefore={SearchIcon}
            placeholder="Search"
            valueStateFunction={setSearchData}
            keyDownEvent={searchEvent}
          ></TextFieldShopCoin>
          <ShopCoinButton
            iconBefore={Plus}
            label="New Coin"
            onClick={() =>
              navigate("/setting-coin/add-new-coin", {
                state: {
                  dataTable,
                },
              })
            }
            buttonColor="yellow"
          />
        </div>
        <ShopCoinTable data={dataTable} columns={tableColumnsConfig} />
      </div>
    </div>
  );
}
