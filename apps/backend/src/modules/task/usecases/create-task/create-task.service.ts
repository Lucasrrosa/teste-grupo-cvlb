import { Inject, Injectable } from '@nestjs/common';
import { TaskRepository } from '../../task.repository';
import { CreateTaskDto } from '../../dtos/CreateTodo.dto';
import { TaskResponseDto } from '../../dtos/TodoResponse.dto';

@Injectable()
export class CreateTaskService {
  @Inject()
  private readonly taskRepository: TaskRepository;

  async create(createTaskDto: CreateTaskDto): Promise<TaskResponseDto> {
    const task = this.taskRepository.create(createTaskDto);
    const response = await this.taskRepository.save(task);

    return new TaskResponseDto(response);
  }
}
