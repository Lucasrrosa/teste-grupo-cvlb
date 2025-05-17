import { Inject, Injectable } from '@nestjs/common';
import { TaskRepository } from '../../task.repository';
import { TaskResponseDto } from '../../dtos/TaskResponse.dto';

@Injectable()
export class SetTaskCompletionService {
  @Inject()
  private readonly taskRepository: TaskRepository;

  async setCompletion(
    taskId: number,
    completed: boolean,
  ): Promise<TaskResponseDto> {
    const task = await this.taskRepository.findOneBy({ id: taskId });
    if (!task) {
      throw new Error('Task not found');
    }
    task.completed = completed;
    const result = await this.taskRepository.save(task);

    return new TaskResponseDto(result);
  }
}
