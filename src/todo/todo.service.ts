import {Injectable,Inject } from "@nestjs/common";
import { Repository } from 'typeorm';
import {TodoEntity} from "./todo.entity";
import {TodoDto} from "./dto/todo.dto";
import {InjectRepository} from "@nestjs/typeorm";
@Injectable()
export class TodoService{
    constructor(
        @InjectRepository(TodoEntity) private TodoRepository: Repository<TodoEntity>
    ){}
   async getTasks(){
       return await this.TodoRepository.find()
    }
   async postTask(dto:TodoDto){
        const todo =  this.TodoRepository.create({...dto})
        await this.TodoRepository.save(todo);
        return  todo
   }
   async deleteTask(id:number){
        await this.TodoRepository.delete(id)
   }
}