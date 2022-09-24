import moment from "moment";
import { sharedService } from "./shared.service";

const userService = {
  logIn(userName: string, password: string, newpass?: string) {
    const data = sharedService.enscrypt_by_aes({ userName, password });
    const response = sharedService.descrypt_by_aes(data);

    let intialAccount = {
      UserName: "admin@admin.com",
      PassWord: "",
    };
    if (!!newpass) {
      intialAccount.PassWord = newpass;
    } else intialAccount.PassWord = "admin_2022";
    delete response.password;

    response.email = "admin@admin.com";
    response.date = moment().utc().format();
    return new Promise<any>((resolve, reject) => {
      if (
        userName === intialAccount.UserName &&
        password === intialAccount.PassWord
      ) {
        resolve(response);
      } else {
        reject("Have any error");
      }
    });
  },
  resetPass(userName: string, newPass: string) {},

  logOut() {},
};

export default userService;
