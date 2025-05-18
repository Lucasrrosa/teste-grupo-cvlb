import { Test, TestingModule } from '@nestjs/testing';
import { SetTaskCompletionService } from './mark-as-completed.service';
import { TaskRepository } from '../../task.repository';

describe('MarkAsCompletedService', () => {
  let service: SetTaskCompletionService;

  const mockTaskRepository = {
    save: jest.fn(),
    findOneBy: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SetTaskCompletionService,
        { provide: TaskRepository, useValue: mockTaskRepository },
      ],
    }).compile();

    service = module.get<SetTaskCompletionService>(SetTaskCompletionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should mark a task as completed', async () => {
    const taskId = 1;
    const mockResponse = { id: taskId, title: 'Test Task', completed: false };

    mockTaskRepository.findOneBy.mockReturnValue(mockResponse);
    mockTaskRepository.save.mockResolvedValue({
      ...mockResponse,
      completed: true,
    });

    const result = await service.setCompletion(taskId, true);
    expect(result).toEqual({
      ...mockResponse,
      completed: true,
    });
    expect(mockTaskRepository.findOneBy).toHaveBeenCalledWith({ id: taskId });
    expect(mockTaskRepository.save).toHaveBeenCalledWith({
      ...mockResponse,
      completed: true,
    });
    expect(mockTaskRepository.save).toHaveBeenCalledTimes(1);
  });
});
