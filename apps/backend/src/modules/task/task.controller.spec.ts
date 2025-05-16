import { Test, TestingModule } from '@nestjs/testing';
import { TaskController } from './task.controller';
import { CreateTaskService } from './usecases/create-task/create-task.service';
import { GetAllTasksService } from './usecases/get-all-tasks/get-all-tasks.service';
import { MarkAsCompletedService } from './usecases/mark-as-completed/mark-as-completed.service';
import { DeleteTaskService } from './usecases/delete-task/delete-task.service';

describe('TaskController', () => {
  let controller: TaskController;

  const mockCreateTaskService = {
    create: jest.fn(),
  };

  const mockGetAllTasksService = {
    getAllTasks: jest.fn(),
  };

  const mockMarkAsCompletedService = {
    markAsCompleted: jest.fn(),
  };

  const mockDeleteTaskService = {
    delete: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaskController],
      providers: [
        {
          provide: CreateTaskService,
          useValue: mockCreateTaskService,
        },
        {
          provide: GetAllTasksService,
          useValue: mockGetAllTasksService,
        },
        {
          provide: MarkAsCompletedService,
          useValue: mockMarkAsCompletedService,
        },
        {
          provide: DeleteTaskService,
          useValue: mockDeleteTaskService,
        },
      ],
    }).compile();

    controller = module.get<TaskController>(TaskController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should call createTaskService.create with the correct parameters', async () => {
    const createTaskDto = {
      title: 'Test Task',
      description: 'Test Description',
    };
    const mockResponse = { id: 1, ...createTaskDto };

    mockCreateTaskService.create.mockResolvedValue(mockResponse);

    const result = await controller.createTask(createTaskDto);

    expect(mockCreateTaskService.create).toHaveBeenCalledWith(createTaskDto);
    expect(result).toEqual(mockResponse);
  });

  it('should call getAllTasksService.getAllTasks and return the result', async () => {
    const mockTasks = [
      { id: 1, title: 'Task 1' },
      { id: 2, title: 'Task 2' },
    ];

    mockGetAllTasksService.getAllTasks.mockResolvedValue(mockTasks);

    const result = await controller.getAllTasks();

    expect(mockGetAllTasksService.getAllTasks).toHaveBeenCalled();
    expect(result).toEqual(mockTasks);
  });

  it('should call markAsCompletedService.markAsCompleted with the correct parameters', async () => {
    const taskId = 1;
    const mockResponse = { id: taskId, completed: true };

    mockMarkAsCompletedService.markAsCompleted.mockResolvedValue(mockResponse);

    const result = await controller.markAsCompleted(taskId);

    expect(mockMarkAsCompletedService.markAsCompleted).toHaveBeenCalledWith(
      taskId,
    );
    expect(result).toEqual(mockResponse);
  });

  it('should call deleteTaskService.delete with the correct parameters', async () => {
    const taskId = 1;
    const mockResponse = { id: taskId, title: 'Test Task' };

    mockDeleteTaskService.delete.mockResolvedValue(mockResponse);

    await controller.deleteTask(taskId);

    expect(mockDeleteTaskService.delete).toHaveBeenCalledWith(taskId);
  });
});
