export const mockOrders = [
  {
    id: 1,
    productName: "MacBook Pro",
    orderDate: "2024-06-10",
    status: "spedito",
    total: 1099.0,
    trackingNumber: "TRK123456789",
  },
  {
    id: 2,
    productName: "iPhone 15 Pro",
    orderDate: "2024-06-08",
    status: "in lavorazione",
    total: 1199.0,
    trackingNumber: null,
  },
  {
    id: 3,
    productName: "AirPods",
    orderDate: "2024-06-05",
    status: "spedito",
    total: 149.0,
    trackingNumber: "TRK987654321",
  },
  {
    id: 4,
    productName: "iPad Air",
    orderDate: "2024-06-03",
    status: "annullato",
    total: 649.0,
    trackingNumber: null,
  },
  {
    id: 5,
    productName: "Apple Watch SE",
    orderDate: "2024-06-01",
    status: "spedito",
    total: 249.0,
    trackingNumber: "TRK456789123",
  },
];

export const mockMetrics = {
  totalOrders: 5,
  pendingOrders: 1,
  completedOrders: 3,
  totalSpent: 5075.0,
};
