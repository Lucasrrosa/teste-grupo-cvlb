import { TaskEntity } from '../task.entity';

export class TaskResponseDto {
  id: number;
  title: string;
  description?: string;
  completed: boolean;

  constructor(partial: TaskEntity) {
    this.id = partial.id;
    this.title = partial.title;
    this.description = partial.description;
    this.completed = partial.completed;
  }
}
