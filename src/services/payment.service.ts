import { PaymentItemModel } from "../models/payment.model";

const paymentService = {
  getData(): Promise<PaymentItemModel[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(
          Array.from({ length: 75 }, (_, i) => ({
            id: "000" + i,
            no: i,
            accountName: "name_" + i,
            bankName: "bank_" + i + "_2022",
            accountNumber: (Math.random() * 100000000).toFixed(0),
            transition: (Math.random() * 100000).toFixed(2),
          }))
        );
      }, 5000);
    });
  },
  getPaymentById(id: string): Promise<PaymentItemModel> {
    return new Promise((resolve, reject) => {
      resolve({
        id,
        no: 1,
        accountName: "name_" + 1,
        bankName: "bank_" + 1 + "_2022",
        accountNumber: (Math.random() * 100000000).toFixed(0),
        transition: (Math.random() * 100000).toFixed(2),
      });
    });
  },

  addNewPayment() {},
  editPayment() {},
};

export default paymentService;
