import { Inject, Injectable } from '@nestjs/common';
import { TaskRepository } from '../../task.repository';
import { TaskResponseDto } from '../../dtos/TodoResponse.dto';

@Injectable()
export class MarkAsCompletedService {
  @Inject()
  private readonly taskRepository: TaskRepository;

  async markAsCompleted(taskId: number): Promise<TaskResponseDto> {
    const task = await this.taskRepository.findOneBy({ id: taskId });
    if (!task) {
      throw new Error('Task not found');
    }
    task.completed = true;
    const result = await this.taskRepository.save(task);

    return new TaskResponseDto(result);
  }
}
