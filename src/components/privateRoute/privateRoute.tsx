import moment from "moment";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import useUserData from "../../shared/hooks/useUserData";
import { updateCurrentUser } from "../../shared/state/reducers/user.reducer";

export default function PrivateRoute({ children }: any) {
  const { userData } = useUserData();
  const [currentData, setCurrentData] = useState(
    localStorage.getItem("loginData")
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const oldData =
      localStorage.getItem("loginData") !== null
        ? JSON.parse(localStorage.getItem("loginData") as string)
        : "";

    if (moment().utc().diff(oldData.date, "day") < 1) {
      dispatch(updateCurrentUser(oldData));
      setCurrentData(oldData);
    }
  }, []);

  useEffect(() => {
    setCurrentData(userData);
  }, [userData]);
  // debugger;
  return !!currentData ? children : <Navigate to={"/login"} />;
}
