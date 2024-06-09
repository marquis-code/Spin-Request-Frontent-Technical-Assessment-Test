import { describe, it, expect, beforeEach, vi } from 'vitest';
import { setActivePinia, createPinia } from 'pinia';
import { useTaskStore } from '@/stores/taskStore';
import { tasksApiFactory } from '@/apiFactory/task';
import { TaskInterface } from '@/interfaces/taskInterface';

vi.mock('@/apiFactory/task');

describe('Task Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('fetchTasks should load tasks', async () => {
    const mockTasks: TaskInterface[] = [{ id: 1, name: 'Task 1', completed: false }];
    (tasksApiFactory.getAllTasks as vi.Mock).mockResolvedValue({ data: mockTasks });

    const taskStore = useTaskStore();
    await taskStore.fetchTasks();

    expect(taskStore.tasks).toEqual(mockTasks);
    expect(taskStore.loading).toBe(false);
  });

  it('fetchTaskById should load a task by ID', async () => {
    const mockTask: TaskInterface = { id: 1, name: 'Task 1', completed: false };
    (tasksApiFactory.getTaskById as vi.Mock).mockResolvedValue({ data: mockTask });

    const taskStore = useTaskStore();
    await taskStore.fetchTaskById(1);

    expect(taskStore.currentTask).toEqual(mockTask);
    expect(taskStore.loading).toBe(false);
  });

  it('createTask should add a new task', async () => {
    const mockTask: TaskInterface = { id: 1, name: 'Task 1', completed: false };
    (tasksApiFactory.createTask as vi.Mock).mockResolvedValue({ data: mockTask });

    const taskStore = useTaskStore();
    await taskStore.createTask(mockTask);

    expect(taskStore.tasks).toContain(mockTask);
    expect(taskStore.loading).toBe(false);
  });

  it('updateTask should update an existing task', async () => {
    const initialTask: TaskInterface = { id: 1, name: 'Task 1', completed: false };
    const updatedTask: TaskInterface = { id: 1, name: 'Updated Task 1', completed: true };
    (tasksApiFactory.updateTask as vi.Mock).mockResolvedValue({ data: updatedTask });

    const taskStore = useTaskStore();
    taskStore.tasks = [initialTask];
    await taskStore.updateTask({ id: 1, name: 'Updated Task 1', completed: true });

    expect(taskStore.tasks[0]).toEqual(updatedTask);
    expect(taskStore.loading).toBe(false);
  });

  it('deleteTask should remove a task', async () => {
    const mockTask: TaskInterface = { id: 1, name: 'Task 1', completed: false };
    (tasksApiFactory.deleteTask as vi.Mock).mockResolvedValue({});

    const taskStore = useTaskStore();
    taskStore.tasks = [mockTask];
    await taskStore.deleteTask(1);

    expect(taskStore.tasks).not.toContain(mockTask);
    expect(taskStore.loading).toBe(false);
  });
});
