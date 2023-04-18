interface IAddressRequest {
  logradouro: string;
  cep: string;
  numero?: string;
  complemento?: string;
  cidade: string;
  estado: string;
}

export interface IPropertyRequest {
  address: IAddressRequest;
  tamanho: number;
  valor: number;
  categoryId: string;
}
