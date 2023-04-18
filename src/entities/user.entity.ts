import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
  OneToMany,
} from "typeorm";
import { Schedule } from "./schedule.entity";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  nome: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  adm: boolean;

  @Column()
  ativo: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updateAt: Date;

  @OneToMany(() => Schedule, (schedule) => schedule.user)
  schedules: Schedule[];
}
