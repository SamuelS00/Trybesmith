export interface IProduct {
  name: string,
  amount: string
}

export interface ProductDTO extends IProduct {
  id: number;
}