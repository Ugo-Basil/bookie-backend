import { DBTable } from './../constants/DBTable';
import { Author } from "./Author";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity(DBTable.BOOKS)
export class Book{
    @PrimaryGeneratedColumn()
    id: number

    @Column({ nullable: false })
    title: string

    @Column()
    description: string

    @ManyToOne((type) => Author, (author) => author.books, { eager: true })
    author: Author

    @Column()
    authorId: number

    @Column()
    price: number

    @Column()
    category: string
}