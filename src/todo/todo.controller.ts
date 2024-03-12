import {Controller,Get,Post,Delete,Body} from "@nestjs/common";
import {TodoService} from "./todo.service";
import {TodoDto} from "./dto/todo.dto";

@Controller('api')
export class TodoController {

    constructor(private TodoService:TodoService) {}
    @Get()
    getTasks(){
        return this.TodoService.getTasks()
    }
    @Post()
    postTask(@Body() todo_dto:TodoDto){
        const todo = this.TodoService.postTask(todo_dto)
        return todo
    }
    @Delete()
    deleteTask(@Body() id:number){
        return this.TodoService.deleteTask(id)
    }
}