export type CompletionStatus = "pending" | "progress" | "completed";

export interface TaskInterface {
  title: string;
  description: string;
  completionStatus: CompletionStatus;
}

export type UpdateTaskInterface = Partial<TaskInterface>;
