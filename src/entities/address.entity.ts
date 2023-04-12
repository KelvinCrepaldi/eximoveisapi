import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("addresses")
export class Address {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 20 })
  logradouro: string;

  @Column({ length: 12 })
  cep: string;

  @Column({ nullable: true, length: 5 })
  numero: string;

  @Column({ nullable: true, length: 45 })
  complemento: string;

  @Column({ length: 25 })
  cidade: string;

  @Column({ length: 2 })
  estado: string;
}
