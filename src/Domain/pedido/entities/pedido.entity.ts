export class Cliente {
  id: number;
  cpf: number;
  name: string;
  email: string;

  constructor(cpf: number, name: string, email: string, id?: number) {
    this.cpf = cpf;
    this.name = name;
    this.email = email;
    this.id = id;
  }
}
