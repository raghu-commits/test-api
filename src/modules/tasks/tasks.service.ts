/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task) private readonly taskRepository: Repository<Task>,
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}
  async create(createTaskDto: CreateTaskDto, userId: number) {
    const task = await this.taskRepository.save(createTaskDto);
    task.user = await this.userRepository.findOne({ where: { id: userId } });
    return await this.taskRepository.save(task);
  }

  async findAll() {
    return await this.taskRepository.find({
      relations: ['user'],
    });
  }

  async findAllByUserId(userId: number) {
    const user = await this.userRepository.findOne({ where: { id: userId } });
    console.log(user);
    return await this.taskRepository.find({
      relations: ['user'],
      where: { user: user },
    });
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
