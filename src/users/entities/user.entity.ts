import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm"

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column({ unique: true })
  email: string

  @Column()
  password: string

  @Column()
  firstName: string

  @Column()
  lastName: string

  @Column({ default: "user" })
  role: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
