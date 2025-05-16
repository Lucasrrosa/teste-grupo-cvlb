import { Test, TestingModule } from '@nestjs/testing';
import { CreateTaskService } from './create-task.service';
import { TaskRepository } from '../../task.repository';

describe('CreateTaskService', () => {
  let service: CreateTaskService;

  const mockTaskRepository = {
    create: jest.fn(),
    save: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CreateTaskService,
        {
          provide: TaskRepository,
          useValue: mockTaskRepository,
        },
      ],
    }).compile();

    service = module.get<CreateTaskService>(CreateTaskService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a task', async () => {
    const createTaskDto = { title: 'Test Task' };
    const savedTask = { id: '1', ...createTaskDto };

    mockTaskRepository.create.mockReturnValue(createTaskDto);
    mockTaskRepository.save.mockResolvedValue(savedTask);

    const result = await service.create(createTaskDto);

    expect(result).toEqual(savedTask);
    expect(mockTaskRepository.create).toHaveBeenCalledWith(createTaskDto);
    expect(mockTaskRepository.save).toHaveBeenCalledWith(createTaskDto);
    expect(mockTaskRepository.save).toHaveBeenCalledTimes(1);
  });
});
