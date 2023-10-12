export class Pedido {
  id: number;
  status: string;
  orderNumber: number;
  cliente: number;
  produtos: string;

  constructor(
    status: string,
    orderNumber: number,
    cliente: number,
    produtos: string,
    id?: number,
  ) {
    this.cliente = cliente;
    this.status = status;
    this.orderNumber = orderNumber;
    this.produtos = produtos;
    this.id = id;
  }
}
