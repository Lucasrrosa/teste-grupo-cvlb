import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { CreateTaskDto } from './dtos/CreateTodo.dto';
import { CreateTaskService } from './usecases/create-task/create-task.service';
import { GetAllTasksService } from './usecases/get-all-tasks/get-all-tasks.service';
import { DeleteTaskService } from './usecases/delete-task/delete-task.service';
import { MarkAsCompletedService } from './usecases/mark-as-completed/mark-as-completed.service';

@Controller('tasks')
export class TaskController {
  @Inject()
  private readonly createTaskService: CreateTaskService;

  @Inject()
  private readonly getAllTasksService: GetAllTasksService;

  @Inject()
  private readonly markAsCompletedService: MarkAsCompletedService;

  @Inject()
  private readonly deleteTaskService: DeleteTaskService;

  @Get()
  async getAllTasks() {
    const tasks = await this.getAllTasksService.getAllTasks();
    return tasks;
  }

  @Post()
  async createTask(@Body() createTaskDto: CreateTaskDto) {
    const task = await this.createTaskService.create(createTaskDto);
    return task;
  }

  @Post('mark-as-completed/:id')
  async markAsCompleted(@Param('id', ParseIntPipe) taskId: number) {
    const task = await this.markAsCompletedService.markAsCompleted(taskId);
    return task;
  }

  @Delete(':id')
  async deleteTask(@Param('id', ParseIntPipe) taskId: number) {
    await this.deleteTaskService.delete(taskId);
  }
}
