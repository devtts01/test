import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ChangeStatusDialog from "../../components/chageStatusDialog/changeStatusDialog";
import depositService from "../../services/deposits.service";
import { currencyFormat, timeFormat } from "../../shared/format/time-format";
import useDialog from "../../shared/hooks/useDialog";
import "./withdrawDetail.scss";

export default function WithdrawDetail() {
  const params = useParams() as any;
  const { openDialog } = useDialog();
  const [currentData, setCurrentData] = useState({} as any);

  useEffect(() => {
    depositService.getDepositById(params.id).then((val) => {
      setCurrentData(val);
    });
  }, []);

  const changeStatus = () => {
    openDialog(<ChangeStatusDialog id={params.id} />, "Change Status");
  };
  return (
    <div className="deposit-detail-container">
      <div className="content">
        <div className="card">
          <div className="row">
            <div className="title">Status</div>
            <div className={`value flex items-center`}>
              {!!currentData.status && (
                <div
                  className={`${currentData.status
                    .toLowerCase()
                    .replaceAll(" ", "")}`}
                >
                  {currentData.status}
                </div>
              )}
              <div className="edit hover" onClick={changeStatus}>
                Edit
              </div>
            </div>
          </div>
          <div className="row">
            <div className="title">Username</div>
            <div className="value">{currentData.userName}</div>
          </div>
          <div className="row">
            <div className="title">Email</div>
            <div className="value">{currentData.email}</div>
          </div>
          <br />
          <div className="row">
            <div className="title">Code</div>
            <div className="value">{currentData.code}</div>
          </div>
          <div className="row">
            <div className="title">Created</div>
            <div className="value">{timeFormat(currentData.created)}</div>
          </div>
          <div className="row">
            <div className="title">Amount USDT</div>
            <div className="value">
              {currencyFormat(currentData.amountUSDT)}
            </div>
          </div>
          <div className="row">
            <div className="title">Amount VND</div>
            <div className="value">{currencyFormat(currentData.amountVND)}</div>
          </div>
          <br />

          <div className="row">
            <div className="title">Deposit rate</div>
            <div className="value">{currentData.depositRate} %</div>
          </div>
          <div className="row">
            <div className="title">Content</div>
            <div className="value">{currentData.content}</div>
          </div>
          <div className="row">
            <div className="title">Payment method</div>
            <div className="value">{currentData.paymentMethod}</div>
          </div>
          <div className="row">
            <div className="title">Document</div>
            <div className="value">{currentData.document}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
