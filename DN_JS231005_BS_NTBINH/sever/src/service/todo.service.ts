import { Request, Response } from "express";
import TodoRepository from "../repositories/todo.repository";

class TodoService {
  private todoRepository: TodoRepository;

  constructor() {
    this.todoRepository = new TodoRepository();
  }

  async getAllTodo(): Promise<any> {
    return await this.todoRepository.getAllTodo();
  }
  async getOneTodo(id: number): Promise<any> {
    const data = await this.todoRepository.getOneTodo(id);
    return data;
  }
  async createTodo(formRequest: any) {
    await this.todoRepository.createTodo(formRequest);
  }

  async deleteTodoById(id: number) {
    const data = await this.todoRepository.deleteById(id);
    return data;
  }

  async updateTodo(id: number, formUpdate: any) {
    const data = await this.todoRepository.updateTodo(id, formUpdate);
    return data;
  }
}

export default TodoService;
