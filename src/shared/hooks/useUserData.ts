import { useSelector } from "react-redux";

export default function useUserData() {
  const userData = useSelector((state: any) => state.userData.data);
  return { userData };
}
