import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { Exclude } from "class-transformer";

@Entity()
export class UserEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column({
        name: "name",
        nullable: false
    })
    name: string

    @Column({
        name: "email",
        nullable: false
    })
    email: string


    @Column({
        name: "password",
        nullable: false
    })
    @Exclude()
    password: string

    @Column({
        name: "phone_number",
        nullable: false
    })
    phoneNumber: string

    @Column({
        name: "firts_name",
        nullable: true
    })
    firstName?: string

    @Column({
        name: "last_name",
        nullable: true
    })
    lastName?: string

    @Column({
        name: "address",
        nullable: true
    })
    address?: string

    @Column({
        name: "user_type",
        nullable: true
    })
    userType?: number

    @Column({
        name: "remember_me_token",
        nullable: true
    })
    rememberMeToken?: string | null

    @Column({
        name: "is_active",
        nullable: true
    })
    isActive: boolean

    @Column({
        name: "access_token",
        nullable: true
    })
    accessToken?: string

    // @Column()
    // created_at: Date

    // @Column()
    // updated_at: Date

    // @Column()
    // deleted_at: Date
}
