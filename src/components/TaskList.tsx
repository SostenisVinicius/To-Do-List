import React, { useEffect, useState } from 'react';
import { useTaskContext, TaskData } from '../context/TaskContext';
import { Task } from './Task';

interface TaskListProps {
  search: string;
  status: string;
}

export function TaskList({ search, status }: TaskListProps) {
  const { tasks } = useTaskContext();
  const [tasksFiltered, setTasksFiltered] = useState<TaskData[]>([]);

  useEffect(() => {
    const taskSorted = tasks.sort((a, b) => {
      const aDate = new Date(a.data);
      const bDate = new Date(b.data);

      if (aDate < bDate) {
        return 1;
      } else if (aDate > bDate) {
        return -1;
      } else {
        return 0;
      }
    })

    const taskSearched = tasks.filter((task) => task.title.toLowerCase().includes(search.toLowerCase()));
    const taskStatus = tasks.filter((task) => task.status === status);
    const tasksFiltered = taskStatus.filter((task) => task.title.toLowerCase().includes(search.toLowerCase()));

    if (search !== '' && status !== '') {
      console.log("os dois aqui: ")
      setTasksFiltered(tasksFiltered);
    } else if (search === '' && status === '') {
      console.log("Os dois não tem aqui: ")
      setTasksFiltered(taskSorted);
    } else if (search !== '') {
      console.log("pesquisa aqui: ")
      setTasksFiltered(taskSearched);
    } else if (status !== '') {
      console.log("status aqui: ")
      setTasksFiltered(taskStatus);
    }

  }, [search, status, tasks]);

  if (tasks.length === 0 || tasksFiltered.length === 0) {
    return (
      <div className="mx-auto max-w-sm px-4 py-8 sm:max-w-3xl  sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
        <p className='text-xl'>Nenhuma tarefa encontrada.</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-sm px-4 py-8 sm:max-w-3xl  sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
      <div className=" grid grid-cols-1 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {tasksFiltered.map((tasks) => (
          <Task key={tasks.id} task={tasks} />
        ))}
      </div>
    </div>
  );
};