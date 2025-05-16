import { Test, TestingModule } from '@nestjs/testing';
import { GetAllTasksService } from './get-all-tasks.service';
import { TaskRepository } from '../../task.repository';

describe('GetAllTasksService', () => {
  let service: GetAllTasksService;
  const mockTaskRepository = {
    find: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GetAllTasksService,
        { provide: TaskRepository, useValue: mockTaskRepository },
      ],
    }).compile();

    service = module.get<GetAllTasksService>(GetAllTasksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return all tasks', async () => {
    const mockTasks = [
      { id: '1', title: 'Task 1' },
      { id: '2', title: 'Task 2' },
    ];

    mockTaskRepository.find.mockResolvedValue(mockTasks);

    const result = await service.getAllTasks();

    expect(result).toEqual(mockTasks);
    expect(mockTaskRepository.find).toHaveBeenCalled();
  });
});
