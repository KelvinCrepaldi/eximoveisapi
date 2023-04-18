import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Property } from "./property.entity";
import { User } from "./user.entity";

@Entity("schedules_users_properties")
export class Schedule {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "timestamp" })
  horario_visita: Date;

  @ManyToOne(() => User, { eager: true })
  user: User;

  @ManyToOne(() => Property)
  property: Property;
}
