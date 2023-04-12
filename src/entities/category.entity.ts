import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("Categories")
export class Category {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 25, unique: true })
  nome: string;
}
