export interface IOrder {
  userId: number;
  productsIds: number[]
}

export interface OrderDTO extends IOrder {
  id: number;
}