import { Test, TestingModule } from '@nestjs/testing';
import { DeleteTaskService } from './delete-task.service';
import { TaskRepository } from '../../task.repository';

describe('DeleteTaskService', () => {
  let service: DeleteTaskService;

  const mockTaskRepository = {
    remove: jest.fn(),
    findOneBy: jest.fn(),
  };
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DeleteTaskService,
        { provide: TaskRepository, useValue: mockTaskRepository },
      ],
    }).compile();

    service = module.get<DeleteTaskService>(DeleteTaskService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should delete a task', async () => {
    const taskId = 1;
    const mockResponse = { id: taskId, title: 'Test Task' };

    mockTaskRepository.findOneBy.mockReturnValue(mockResponse);
    mockTaskRepository.remove.mockResolvedValue(mockResponse);

    await service.delete(taskId);

    expect(mockTaskRepository.findOneBy).toHaveBeenCalledWith({ id: taskId });
    expect(mockTaskRepository.remove).toHaveBeenCalledWith(mockResponse);
    expect(mockTaskRepository.remove).toHaveBeenCalledTimes(1);
  });
});
