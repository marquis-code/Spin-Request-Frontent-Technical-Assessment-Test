export interface TaskInterface {
  title: string;
  description: string;
  isCompleted: boolean;
}

export type UpdateTaskInterface = Partial<TaskInterface>;
