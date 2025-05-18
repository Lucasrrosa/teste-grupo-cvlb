import { DataSource, Repository } from 'typeorm';
import { TaskEntity } from './task.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TaskRepository extends Repository<TaskEntity> {
  constructor(private readonly dataSource: DataSource) {
    super(TaskEntity, dataSource.createEntityManager());
  }
}
