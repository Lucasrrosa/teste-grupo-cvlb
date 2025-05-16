import { Inject, Injectable } from '@nestjs/common';
import { TaskRepository } from '../../task.repository';
import { TaskResponseDto } from '../../dtos/TodoResponse.dto';

@Injectable()
export class GetAllTasksService {
  @Inject()
  private readonly taskRepository: TaskRepository;

  async getAllTasks(): Promise<TaskResponseDto[]> {
    const result = await this.taskRepository.find();

    return result.map((task) => new TaskResponseDto(task));
  }
}
