import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";

import { Property } from "./property.entity";

@Entity("categories")
export class Category {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 25, unique: true })
  nome: string;

  @OneToMany(() => Property, (property) => property.category)
  properties: Property[];
}
