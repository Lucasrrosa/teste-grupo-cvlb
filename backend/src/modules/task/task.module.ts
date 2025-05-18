import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskEntity } from './task.entity';
import { TaskController } from './task.controller';
import { CreateTaskService } from './usecases/create-task/create-task.service';
import { TaskRepository } from './task.repository';
import { GetAllTasksService } from './usecases/get-all-tasks/get-all-tasks.service';
import { DeleteTaskService } from './usecases/delete-task/delete-task.service';
import { SetTaskCompletionService } from './usecases/set-task-completion/mark-as-completed.service';

@Module({
  imports: [TypeOrmModule.forFeature([TaskEntity])],
  controllers: [TaskController],
  providers: [
    CreateTaskService,
    TaskRepository,
    GetAllTasksService,
    DeleteTaskService,
    SetTaskCompletionService,
  ],
})
export class TaskModule {}
