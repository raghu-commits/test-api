/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task) private taskRepository: Repository<Task>,
  ) {}
  async create(createTaskDto: CreateTaskDto) {
    return await this.taskRepository.save(createTaskDto);
  }

  async findAll() {
    return await this.taskRepository.find();
  }

  async findOne(id: number) {
    const task = await this.taskRepository.findOne({ where: { id } });
    if (task !== null) {
      return task;
    }
    return { message: 'No matching tasks found!!' };
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    await this.taskRepository.save({
      id,
      ...updateTaskDto,
    });
    return await this.taskRepository.findOne({ where: { id } });
  }

  async remove(id: number) {
    return await this.taskRepository.delete({ id });
  }
}
