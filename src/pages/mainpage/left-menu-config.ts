import Dolar from "../../assets/icon/CurrencyDollar.svg";
import Gear from "../../assets/icon/Gear.svg";
import CreditCard from "../../assets/icon/CreditCard.svg";
import Money from "../../assets/icon/Money.svg";
import Handbag from "../../assets/icon/Handbag.svg";
import ShoppingCart from "../../assets/icon/ShoppingCart.svg";
import Users from "../../assets/icon/Users.svg";
import TextAlignRight from "../../assets/icon/TextAlignRight.svg";
import TextAlignRightYellow from "../../assets/icon/TextAlignRightYellow.svg";
import CurrencyDollarYellow from "../../assets/icon/CurrencyDollarYellow.svg";
import GearYellow from "../../assets/icon/Gear-Yellow.svg";
import CreditCardYellow from "../../assets/icon/CreditCardYellow.svg";
import MoneyYellow from "../../assets/icon/MoneyYellow.svg";
import HandbagYellow from "../../assets/icon/HandbagYellow.svg";
import ShoppingCartYellow from "../../assets/icon/ShoppingCartYellow.svg";
import UsersYellow from "../../assets/icon/UsersYellow.svg";
export const LeftMenuConfig = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: TextAlignRight,
    iconActive: TextAlignRightYellow,
  },
  {
    title: "Payment",
    url: "/payment",
    icon: Dolar,
    iconActive: CurrencyDollarYellow,
  },
  {
    title: "Setting Coin",
    url: "/setting-coin",
    icon: Gear,
    iconActive: GearYellow,
  },
  {
    title: "Deposits",
    url: "/deposits",
    icon: CreditCard,
    iconActive: CreditCardYellow,
  },
  {
    title: "Withdraws",
    url: "/withdraw",
    icon: Money,
    iconActive: MoneyYellow,
  },
  {
    title: "Buy",
    url: "/buy",
    icon: Handbag,
    iconActive: HandbagYellow,
  },
  {
    title: "Sell",
    url: "/sell",
    icon: ShoppingCart,
    iconActive: ShoppingCartYellow,
  },
  {
    title: "User",
    url: "/user",
    icon: Users,
    iconActive: UsersYellow,
  },
];
