import React, { createContext, useContext, useEffect, useState } from 'react';

export enum TaskStatus {
  Pending = 'Pendente',
  InProgress = 'Em andamento',
  Completed = 'Concluída',
}

export interface TaskData {
  id: number;
  title: string;
  status: TaskStatus;
  data: Date;
  descricao?: string;
  importante: boolean;
}

interface TaskContextValue {
  tasks: TaskData[];
  addTask: (task: TaskData) => void;
  editTask: (taskId: number, updatedTask: TaskData) => void;
  removeTask: (taskId: number) => void;
}

const TaskContext = createContext<TaskContextValue>({
  tasks: [],
  addTask: () => { },
  editTask: () => { },
  removeTask: () => { },
});

interface TaskProviderProps {
  children: React.ReactNode;
}

export function TaskProvider({ children }: TaskProviderProps) {
  const [tasks, setTasks] = useState<TaskData[]>([]);

  console.log(tasks);

  useEffect(() => {
    const localTasks = localStorage.getItem('tasks');
    if (localTasks) {
      setTasks(JSON.parse(localTasks));
    }
  }, []);

  const addTask = (task: TaskData) => {
    setTasks([...tasks, task]);
    localStorage.setItem('tasks', JSON.stringify([...tasks, task]));
  };

  const editTask = (taskId: number, updatedTask: TaskData) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === taskId ? updatedTask : task))

    );
    const tasksToUpdate = JSON.parse(localStorage.getItem('tasks') || '[]');
    const taskIndex = tasksToUpdate.findIndex((task: TaskData) => task.id === taskId);
    tasksToUpdate[taskIndex] = updatedTask;
    localStorage.setItem('tasks', JSON.stringify(tasksToUpdate));
  };

  const removeTask = (taskId: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    localStorage.setItem('tasks', JSON.stringify(tasks.filter((task) => task.id !== taskId)));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, editTask, removeTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = (): TaskContextValue => useContext(TaskContext);
