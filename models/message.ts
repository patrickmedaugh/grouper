import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Message {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    body: string

    @Column()
    author: string
}