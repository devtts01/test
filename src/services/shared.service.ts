import CryptoJS from "crypto-js";

export const sharedService = {
  enscrypt_by_aes(obj: { [key: string]: string }) {
    const key = CryptoJS.enc.Utf8.parse(
      <string>process.env.REACT_APP_SECRET_KEY
    );
    return CryptoJS.AES.encrypt(JSON.stringify(obj), key, {
      iv: key,
    }).toString();
  },
  descrypt_by_aes(token: string) {
    const key = CryptoJS.enc.Utf8.parse(
      <string>process.env.REACT_APP_SECRET_KEY
    );
    return JSON.parse(
      CryptoJS.AES.decrypt(token, key, { iv: key }).toString(CryptoJS.enc.Utf8)
    );
  },
};
