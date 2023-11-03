import { Injectable } from '@nestjs/common';
import { Todo } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TodoService {
  constructor(private prismaServie: PrismaService) {}

  //전체 조회
  async fetchAllTodos(): Promise<Todo[]> {
    return this.prismaServie.todo.findMany();
  }

  //단일 조회
  async fetchTodoItem(id: number): Promise<Todo | null> {
    return this.prismaServie.todo.findUnique({ where: { id: Number(id) } });
  }

  //삭제
  async deleteTodoItem(id: number): Promise<Todo | null> {
    return this.prismaServie.todo.delete({ where: { id: Number(id) } });
  }

  //수정
  async updateTodoItem(
    id: number,
    title: string,
    content: string,
    is_done: boolean,
  ): Promise<Todo | null> {
    return this.prismaServie.todo.update({
      where: { id: Number(id) },
      data: {
        title: title,
        content: content,
        is_done: is_done,
      },
    });
  }

  //추가
  async addTodoItem(data: Todo): Promise<Todo> {
    return this.prismaServie.todo.create({ data: data });
  }
}
