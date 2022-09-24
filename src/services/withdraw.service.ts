const withDrawService = {
  getData() {
    return new Promise((rel, rej) => {
      rel(
        Array.from({ length: 25 }, (_, i) => ({
          id: "deposit_id_" + i,
          no: i + 1,
          code: "1345",
          amount: {
            send: 100039.38,
            receive: 10482.46,
          },
          buyer: {
            name: "Jan Cooper",
            email: "Jancooper@gmail.com",
          },
          date: "2022-08-11T05:38:09Z",
          status: ["Confirm", "Hold on", "Complete", "Cancel"][
            +(Math.random() * 3).toFixed(0)
          ],
        }))
      );
    });
  },
  getDepositById(id: string) {
    return new Promise((rel, rej) => {
      return rel({
        id: id,
        userName: "Zaky Grizzly",
        code: "975a614e03",
        email: "grizzly@monlight.com",
        created: "2022-08-11T05:38:09Z",
        amountUSDT: 300000,
        amountVND: 7200000,
        depositRate: 1.2,
        content: "Normal",
        paymentMethod: "ACB - Tran Van Phu - 16744317",
        status: ["Confirm", "Hold on", "Complete", "Cancel"][
          +(Math.random() * 3).toFixed(0)
        ],
        document: "Report process _Q1/2022.pdf",
      });
    });
  },
};

export default withDrawService;
