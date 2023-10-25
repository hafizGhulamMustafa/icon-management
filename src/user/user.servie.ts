import { Injectable } from "@nestjs/common";
import { UserEntity } from "./user.entity/user.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";


@Injectable({})
export class UserService {
    constructor(@InjectRepository(UserEntity) private userRepository: Repository<UserEntity>) { }

    async createUser(userData: any) {
        const create_user = this.userRepository.create(userData);
        await this.userRepository.save(create_user)
        if (create_user) {
            return ({
                status: true,
                message: 'User created successfully',
                data: create_user
            })
        }
    }

    async userListings() {
        const create_user = await this.userRepository.find();
        if (!create_user) {
            return ({
                status: false,
                message: `Users not found.`,
            })
        } else {
            return ({
                status: true,
                message: 'User Details',
                data: create_user
            })
        }
    }

    async getUserById(userId: any) {
        const create_user = await this.userRepository.findOneBy({ id: userId });
        if (!create_user) {
            return ({
                status: false,
                message: `User with id ${userId} not found.`,
            })
        } else {
            return ({
                status: true,
                message: 'User Details',
                data: create_user
            })
        }
    }

    async updateUser(userId: any, attrs: Partial<UserEntity>) {
        const create_user = await this.getUserById(userId)
        if (!create_user.status) {
            return create_user
        }
        Object.assign(create_user.data, attrs)
        await this.userRepository.save(create_user.data)
        return ({
            status: true,
            message: 'User udpated successfully',
            data: create_user.data
        })
    }

    async deleteUser(userId: any) {
        const create_user = await this.getUserById(userId)
        if (!create_user.status) {
            return create_user
        }
        await this.userRepository.remove(create_user.data)
        return ({
            status: true,
            message: 'User deleted successfully',
        })
    }
}