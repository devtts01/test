const sellService = {
  getData() {
    return new Promise((rel, rej) => {
      rel(
        Array.from({ length: 25 }, (_, i) => ({
          id: "buy_id_" + i,
          no: i + 1,
          symbol:
            "https://img.freepik.com/premium-vector/ethereum-icon_578229-266.jpg?w=2000",
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
  getBuyById(id: string) {
    return new Promise((rel, rej) => {
      return rel({
        id: id,
        userName: "Zaky Grizzly",
        symbol:
          "https://img.freepik.com/premium-vector/ethereum-icon_578229-266.jpg?w=2000",
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

export default sellService;
