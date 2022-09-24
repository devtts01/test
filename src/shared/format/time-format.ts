import moment from "moment";
import numeral from "numeral";

export const timeFormat = (
  value: string,
  format: string = "DD MMM YYYY hh:mm a"
) => {
  return moment(value).local().format(format);
};

export const currencyFormat = (value: string, format: string = "0,0.00") => {
  return numeral(value).format(format);
};
