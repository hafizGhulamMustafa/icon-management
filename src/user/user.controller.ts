import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UserService } from './user.servie';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUser } from './dtos/update-user.dto';
import { Serialize } from '../interceptors/serialize.interceptor';
import { UserDto } from './dtos/user.dto';

@Controller('user')
@Serialize(UserDto)

export class UserController {
    constructor(private authService: UserService) { }

    @Post('create')
    async createUser(@Body() validated_data: CreateUserDto) {
        const create_user = await this.authService.createUser(validated_data)
        return create_user
    }

    @Get()
    async userListings() {

        const user_details = await this.authService.userListings()
        return user_details
    }

    @Get('/:id')
    async getUserById(@Param('id') userId: any) {
        const user_details = await this.authService.getUserById(userId)
        return user_details
    }

    @Patch('/:id')
    async updateUser(@Param('id') id: string, @Body() validated_data: UpdateUser) {
        const update_user = await this.authService.updateUser(parseInt(id), validated_data)
        return update_user
    }

    @Delete('/:id')
    async deleteUser(@Param('id') userId: any) {
        const delete_user = await this.authService.deleteUser(userId)
        return delete_user
    }
}
