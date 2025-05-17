import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { CreateTaskDto } from './dtos/CreateTask.dto';
import { CreateTaskService } from './usecases/create-task/create-task.service';
import { GetAllTasksService } from './usecases/get-all-tasks/get-all-tasks.service';
import { DeleteTaskService } from './usecases/delete-task/delete-task.service';
import { SetTaskCompletionService } from './usecases/set-task-completion/mark-as-completed.service';

@Controller('tasks')
export class TaskController {
  @Inject()
  private readonly createTaskService: CreateTaskService;

  @Inject()
  private readonly getAllTasksService: GetAllTasksService;

  @Inject()
  private readonly setTaskCompletionService: SetTaskCompletionService;

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

  @Post('set-completion/:id/:completed')
  async setTaskCompletion(
    @Param('id', ParseIntPipe) taskId: number,
    @Param('completed', ParseBoolPipe) completed: boolean,
  ) {
    const task = await this.setTaskCompletionService.setCompletion(
      taskId,
      completed,
    );
    return task;
  }

  @Delete(':id')
  async deleteTask(@Param('id', ParseIntPipe) taskId: number) {
    await this.deleteTaskService.delete(taskId);
  }
}
