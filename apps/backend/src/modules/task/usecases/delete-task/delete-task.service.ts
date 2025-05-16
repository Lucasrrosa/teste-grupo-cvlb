import { Inject, Injectable } from '@nestjs/common';
import { TaskRepository } from '../../task.repository';

@Injectable()
export class DeleteTaskService {
  @Inject()
  private readonly taskRepository: TaskRepository;

  async delete(taskId: number): Promise<void> {
    const task = await this.taskRepository.findOneBy({ id: taskId });

    if (!task) {
      throw new Error('Task not found');
    }

    await this.taskRepository.remove(task);
  }
}
