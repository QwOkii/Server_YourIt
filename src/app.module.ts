import {Module} from "@nestjs/common";
import {TodoModule} from "./todo/todo.module";
import {ConfigModule,ConfigService} from "@nestjs/config"
import {TypeOrmModule} from "@nestjs/typeorm"
import {TodoEntity} from "./todo/todo.entity";
@Module({
    imports:[
        TodoModule,
        ConfigModule.forRoot({isGlobal:true}),
        TypeOrmModule.forRootAsync({
            imports:[ConfigModule],
            useFactory: (configService:ConfigService)=>({
                type:'postgres',
                host:configService.get('DB_HOST'),
                port:configService.get('DB_PORT'),
                username:configService.get('DB_USERNAME'),
                password:configService.get('DB_PASSWORD'),
                database:configService.get('DB_NAME'),
                synchronize:true,
                entities:[TodoEntity]
            }),
            inject:[ConfigService]
        })
    ]
})
export class AppModule{}