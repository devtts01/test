import Breadscrumb from "../../components/breadscrumb/Breadscrumb";
import TextFieldShopCoin from "../../components/textField/textFieldShopCoin";
import ToggleShopCoin from "../../components/toggle/toggleShopCoin";
import ShopCoinButton from "../../components/shopCoinButton/shopCoinButton";
import DotsThree from "../../assets/icon/DotsThree.svg";
import PencilSimple from "../../assets/icon/PencilSimple.svg";
import NonData from "../../assets/icon/NonData.svg";
import SearchIcon from "../../assets/icon/MagnifyingGlass.svg";
import Trash from "../../assets/icon/Trash.svg";
import useDialog from "../../shared/hooks/useDialog";
import UploadFiled from "../../components/uploadField/UploadField";
import DropDownTextField from "../../components/dropdownTextField/dropdownTextField";
import ShopCoinTable, {
  ICoinTableColumn,
} from "../../components/table/shopCoinTable";

import "./AddNewCoin.scss";
import ButtonWithPopup from "../../components/buttonWithPopup/ButtonWithPopup";
import ConfirmDialog from "../../components/dialog/confirm-dialog/ConfirmDialog";
import { useEffect, useRef, useState } from "react";
import {
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";

export default function AddNewCoin() {
  const dummyData = Array.from({ length: 100 }, (_, i) => ({
    no: i,
    name: "name_" + i,
    email: "email_" + i + "@2022",
  }));
  let blackListData: any[] = [];
  // const dummyData: any[] = [];

  

  let dataFiles: any[] = [];
  const { closeDialog } = useDialog();
  const location = useLocation();
  let dataCoinPass = location.state as any;
  let intialDataTable = dataCoinPass.dataTable;
  const [dataAddCoin, setDataAddCoin] = useState(intialDataTable);
  const [nameCoin, setNameCoin] = useState(() => {
    if (!dataCoinPass.dataItem) return "";
    else return dataCoinPass.dataItem.coinName;
  });
  const [nameCoinFull, setNameCoinFull] = useState("");
  const [indexCoin, setIndexCoin] = useState(() => {
    if (!dataCoinPass.dataItem) return "";
    else return dataCoinPass.dataItem.no;
  });
  const [transCoin, setTransCoin] = useState("");
  const [hideToAll, setHideToAll] = useState(false);
  const [fileData, setFileData] = useState(dataFiles);
  const [blackList, setBlackList] = useState(dummyData);
  const [dataOfBlackList, setDataOfBlackList] = useState([] as any);
  let dataCoinIntial = {
    coinName: nameCoin,
    coinNameFull: nameCoinFull,
    coinInDex: indexCoin,
    coinTransaction: transCoin,
    hideState: hideToAll,
    dataFilesUpload: fileData,
    blackList: dataOfBlackList,
  };
  const { openDialog } = useDialog();
  const navigate = useNavigate();
  const { id } = useParams();
  const handlApplyList = () => {
    setDataOfBlackList(
      blackList.filter((item: any) => item.checkState === true)
    );
  };
  const handleClickAdd = () => {
    //  if (!dataCoinPass.dataItem) {
    //   intialDataTable.push(dataCoinIntial)
    //   dataCoinPass.setDataTable(intialDataTable)
    //  }
    //  else {
    //   intialDataTable.map((item:any) => {
    //      if (item.no!=dataCoinPass.dataItem.no) return item
    //      else return dataCoinIntial
    //   })
    //   dataCoinPass.setStateDataTable(intialDataTable)
    //  }
    console.log(dataCoinIntial);
    closeDialog();
  };
  const tableColumnsConfig: ICoinTableColumn[] = [
    {
      title: "NO",
      dataField: "no",
    },
    {
      title: "NAME",
      dataField: "name",
      sortable: true,
    },
    {
      title: "EMAIL",
      dataField: "email",
    },
    {
      title: "",
      dataField: "_",
      render: (dataItem) => (
        <ButtonWithPopup
          icon={DotsThree}
          menuItem={[
            {
              title: "Delete",
              iconPre: Trash,
              action: () => {
                let actionDeleteUser = () =>{
                  setDataOfBlackList(dataOfBlackList.filter((item:any)=>item.name!==dataItem.name))
                  closeDialog();
                }
                let deleteUserAction=()=>{
                  setDataOfBlackList(dataOfBlackList.filter((item:any)=>item.name != dataItem.name));
                  closeDialog();
                } 
                openDialog(
                  <ConfirmDialog confirmMessage="Are you sure to delete this user?" actionifYes={deleteUserAction}/>,
                  "Delete User"
                );
              },
            },
          ]}
        />
      ),
    },
  ];
  return (
    <div className="add-new-coin-container">
      <div className="header">
        <Breadscrumb
          items={[
            { title: "Home", url: "" },
            { title: "Setting Coin", url: "/setting-coin" },
            {
              title: `${!!id ? "Edit coin" : "Add new coin"}`,
              url: "/setting-coin/add-new-coin",
            },
          ]}
        />
        <div className="page-title">{!!id ? "Edit coin" : "Add new coin"}</div>
      </div>
      <div className="content">
        <div className="coin-information">Coin Information</div>
        <div className="textfield-coin-info">
          <TextFieldShopCoin
            title="Name"
            placeholder="Enter coin full name"
            valueEdit={nameCoin}
            valueStateFunction={setNameCoin}
          ></TextFieldShopCoin>
          <TextFieldShopCoin
            title="Symbol"
            placeholder="Enter coin short name"
            valueStateFunction={setNameCoinFull}
          ></TextFieldShopCoin>
          <TextFieldShopCoin
            title="Index"
            placeholder="Enter index"
            valueStateFunction={setIndexCoin}
          ></TextFieldShopCoin>
          <TextFieldShopCoin
            title="Transaction to VND"
            placeholder="Enter transaction to VND"
            valueStateFunction={setTransCoin}
          ></TextFieldShopCoin>
        </div>
        <div className="upload-field">
          <UploadFiled
            fileData={setFileData}
            editData={fileData}
            allowedArray={["png", "jpeg"]}
          ></UploadFiled>
        </div>
        <div className="user-setting">
          <div className="user-setting-title"> User setting </div>
          <div className="user-to-hide">
            Select user belongs to blacklist to hide
          </div>
        </div>
        <div className="toggle-hiden">
          <ToggleShopCoin
            label="Hide to all user"
            isChecked={hideToAll}
            callbackStateCheck={setHideToAll}
          ></ToggleShopCoin>
        </div>
        {/* <div className="search-blacklist">
          <TextFieldShopCoin
            placeholder="Search and select user to blacklist"
            iconBefore={SearchIcon}
          ></TextFieldShopCoin>
          <ShopCoinButton label="Apply" buttonColor="yellow"></ShopCoinButton>
        </div> */}
        <div className="search-blacklist">
          <DropDownTextField
            setValueState={setBlackList}
            dataSuggest={dummyData}
          ></DropDownTextField>
          <ShopCoinButton
            label="Apply"
            buttonColor="yellow"
            onClick={handlApplyList}
          ></ShopCoinButton>
        </div>

        {dataOfBlackList.length > 0 && (
          <div className="table-blacklist">
            <ShopCoinTable
              data={dataOfBlackList}
              columns={tableColumnsConfig}
            ></ShopCoinTable>
          </div>
        )}
        {dataOfBlackList.length <= 0 && (
          <div className="table-blacklist-none">
            <img alt="" src={NonData}></img>
          </div>
        )}
      </div>
      <div className="button-update-cancel">
        <ShopCoinButton
          label="Cancel"
          buttonColor="pure"
          onClick={() => navigate("/setting-coin")}
        ></ShopCoinButton>
        <ShopCoinButton
          label="Add"
          buttonColor="yellow"
          onClick={handleClickAdd}
        ></ShopCoinButton>
      </div>
    </div>
  );
}
