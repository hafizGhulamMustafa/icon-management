
import { Module } from '@nestjs/common';
import { databaseConfig } from './database';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/user/user.entity/user.entity';


@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: databaseConfig.host,
            port: databaseConfig.port,
            username: databaseConfig.username,
            password: databaseConfig.password,
            database: databaseConfig.database,
            entities: [UserEntity],
            synchronize: true, // set to false in production
        }),
    ],
})
export class DatabaseModule { }
