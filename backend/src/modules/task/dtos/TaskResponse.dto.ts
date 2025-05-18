import { TaskEntity } from '../task.entity';

export class TaskResponseDto {
  id: number;
  title: string;
  description?: string;
  completed: boolean;
  createdAt: Date;

  constructor(entity: TaskEntity) {
    this.id = entity.id;
    this.title = entity.title;
    this.description = entity.description;
    this.completed = entity.completed;
    this.createdAt = entity.createdAt;
  }
}
