export interface IOrder {
  userId: number;
  productsIds: number[]
}

export interface OrderDTO extends IOrder {
  id: string;
}

export interface OrderProduct {
  orderId: number;
  productId: number;
}