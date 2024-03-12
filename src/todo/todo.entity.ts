import {Entity, PrimaryGeneratedColumn, Column} from "typeorm"
@Entity()
export class TodoEntity{

    @PrimaryGeneratedColumn("increment")
    id:number

    @Column()
    name:string

    @Column()
    description:string

    @Column()
    status:string
}